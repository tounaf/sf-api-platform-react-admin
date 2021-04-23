<?php

namespace App\Command;

use App\Entity\User;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserChangePasswordCommand extends Command
{
    protected static $defaultName = 'app:user:change-password';
    protected static $defaultDescription = 'Add a short description for your command';
    private $passwordEncoder;
    private $container;
    public function __construct(?string $name = null, ContainerInterface $container, UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
        $this->container =  $container;
        parent::__construct($name);
    }

    protected function configure()
    {
        $this
            ->setDescription(self::$defaultDescription)
            ->addArgument('username', InputArgument::OPTIONAL, 'User to change password')
            ->addArgument('password', InputArgument::OPTIONAL, 'New password for user')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $username = $input->getArgument('username');
        $password = $input->getArgument('password');
        if (is_null($password) || is_null($username)) {
            $io->error('No username or password provided');
            return Command::SUCCESS;
        }

        $em = $this->container->get('doctrine.orm.default_entity_manager');
        $user = $em->getRepository(User::class)->findOneBy(['username' => $username]);
        if ($user instanceof User) {
            $password = $this->passwordEncoder->encodePassword($user, $password);
            $user->setPassword($password);
            $em->persist($user);
            $em->flush();
            $io->success('Set password user ok');
        } else {
            $io->warning($username . ' not found');
        }

        $io->success('You have a new command! Now make it your own! Pass --help to see your options.');

        return Command::SUCCESS;
    }
}
