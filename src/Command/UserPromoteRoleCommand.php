<?php

namespace App\Command;

use App\Entity\User;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\DependencyInjection\ContainerInterface;

class UserPromoteRoleCommand extends Command
{
    protected static $defaultName = 'app:user:promote-role';
    protected static $defaultDescription = 'Add a short description for your command';
    private $container;
    public function __construct(?string $name = null, ContainerInterface $container)
    {
        $this->container = $container;
        parent::__construct($name);
    }

    protected function configure()
    {
        $this
            ->setDescription(self::$defaultDescription)
            ->addArgument('username', InputArgument::OPTIONAL, 'User to promote')
            ->addArgument('role', InputArgument::OPTIONAL, 'Role to promote')
//            ->addOption('username', null, InputOption::VALUE_NONE, 'User to promote role')
//            ->addOption('role', null, InputOption::VALUE_NONE, 'Role to add')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $username = $input->getArgument('username');
        if ($username) {
            $em = $this->container->get('doctrine.orm.default_entity_manager');
            $user = $em->getRepository(User::class)->findOneBy(['username' => $username]);
            if ($user) {
                $role = $input->getArgument('role');
                $roles = $user->getRoles();
                array_push($roles, $role);
                $user->setRoles($roles);
                $em->persist($user);
                $em->flush();
                $io->success('Role ' . $role . ' Added to ' . $username);
            } else {
                $io->warning($username . ' not found');
            }
        } else {
            $io->warning('Username ' . $username . ' not found');
        }

        return Command::SUCCESS;
    }
}
