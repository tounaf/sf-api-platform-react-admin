<?php

namespace App\Command;

use App\Entity\Profile;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class ProfileGenerateCommand extends Command
{
    protected static $defaultName = 'app:profile:generate';
    protected static $defaultDescription = 'Add a short description for your command';
    private $profiles = [
      'libelle' => 'Admin', 'code' => 'ROLE_ADMIN',
      'libelle' => 'Caisse', 'code' => 'ROLE_CAISSE',
      'libelle' => 'Responsable Stock', 'code' => 'ROLE_RESPONSABLE_STOCK',
      'libelle' => 'Responsable Production', 'code' => 'ROLE_PRODUCTION',
      'libelle' => 'Cuisinier(re)', 'code' => 'ROLE_CUISINIER',
      'libelle' => 'Serveuse(se)', 'code' => 'ROLE_SERVEUR',
    ];
    /**
     * @var EntityManagerInterface
     */
    private $em;

    public function __construct(?string $name = null, EntityManagerInterface $entityManager)
    {
        $this->em = $entityManager;
        parent::__construct($name);
    }

    protected function configure()
    {
        $this
            ->setDescription(self::$defaultDescription)
            ->addArgument('arg1', InputArgument::OPTIONAL, 'Argument description')
            ->addOption('option1', null, InputOption::VALUE_NONE, 'Option description')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $io->writeln('============== Generation profle ============');
        if (!$this->em->getRepository(Profile::class)->findAll()) {
            foreach ($this->profiles as $profile) {
                $pr = new Profile();
                $pr->setLibelle($profile['libelle']);
                $pr->setCode($profile['code']);
                $this->em->persist($pr);
                $this->em->flush();
            }
        }

        $io->success('============= Done ===================');

        return Command::SUCCESS;
    }
}
