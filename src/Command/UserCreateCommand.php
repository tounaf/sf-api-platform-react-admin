<?php

namespace App\Command;
use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

use Doctrine\ORM\EntityManagerInterface;

// class UserCreateCommand extends AbstractController
class UserCreateCommand extends Command
{
    protected static $defaultName = 'app:user:create';
    protected static $defaultDescription = 'Creation nouvel utilisateur';

    private $entityManager;
    private $passwordEncoder;
    public function __construct(EntityManagerInterface $entityManager, UserPasswordEncoderInterface $passwordEncoder)
    {
        // 3. Update the value of the private entityManager variable through injection
        $this->entityManager = $entityManager;
        $this->passwordEncoder = $passwordEncoder;
        parent::__construct();
    }

    protected function configure()
    {
        $this
            ->setDescription(self::$defaultDescription)
            ->addArgument('arg1', InputArgument::OPTIONAL, 'Pseudo')
            ->addArgument('password', InputArgument::OPTIONAL, 'New password for user')
            ->addOption('option1', null, InputOption::VALUE_NONE, 'Option description')
        ;
    }

    private function userCreation($arg1, $password):bool
    {
        
        $em = $this->entityManager;
        

            
            $user = new User();
            $password = $this->passwordEncoder->encodePassword($user, $password);
            $user->setCivilite("Mr");
            $user->setNom("Touky");
            $user->setPrenom("Herinjaka");
            $user->setUsername($arg1);
            $user->setLogin($arg1);
            $user->setEmail($arg1);
            $user->setEnable(1);
            $user->setPassword($password);
            $user->setRoles('Admin');
            $em->persist($user);
            $em->flush();
            return true;

    }
    protected function execute(InputInterface $input, OutputInterface $output): int
    {

        $io = new SymfonyStyle($input, $output);
        $arg1 = $input->getArgument('arg1');
        $password = $input->getArgument('password');

        if ($arg1 && $password) {
            
            
            //$this->userManager->create($input->getArgument('arg1'));
           $this->userCreation($arg1, $password);
           
            $io->note(sprintf('You passed an argument: %s', $arg1));
            $output->writeln('User successfully generated!');
        }

        if ($input->getOption('option1')) {
            // ...
        }

        $io->success('You have a new command! Now make it your own! Pass --help to see your options.');

        return Command::SUCCESS;
    }
}
