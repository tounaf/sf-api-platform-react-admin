<?php

namespace App\Command;

use App\Entity\EntiteType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class EntiteTypeGenerateCommand extends Command
{
    protected static $defaultName = 'app:entite-type:generate';
    protected static $defaultDescription = 'Generation type de entite';

    private $entiteType = [
        ['libelle' => 'Administration', 'code' =>'ADM'],
        ['libelle' => 'Point de vente', 'code' => 'PDV'],
        ['libelle' => 'Stockage', 'code' => 'STK'],
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
        $io->writeln('======= Generate entite type ================');
        if (!$this->em->getRepository(EntiteType::class)->findAll()) {
            foreach ($this->entiteType as $entite) {
                $entiteType = new EntiteType();
                $entiteType->setLibelle($entite['libelle']);
                $entiteType->setCode($entite['code']);
                $this->em->persist($entiteType);
                $this->em->flush();
            }
        }

        $io->success('============ DONE =================');

        return Command::SUCCESS;
    }
}
