<?php
/**
 * Created by PhpStorm.
 * User: nambinina2
 * Date: 06/11/2020
 * Time: 16:50
 */

namespace App\DataPersister;

use ApiPlatform\Core\DataPersister\ContextAwareDataPersisterInterface;
use App\Entity\User;
use App\Utils\Fonctions;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Security;

class UserDataPersister implements ContextAwareDataPersisterInterface
{
    private $passwordEncoder;
    private $dataPersister;
    private $user;
    public function __construct(EntityManagerInterface $dataPersister, UserPasswordEncoderInterface $passwordEncoder, ContainerInterface $container, Security $security)
    {
        $this->passwordEncoder = $passwordEncoder;
        $this->dataPersister = $dataPersister;
        $this->user = $security->getUser();

    }

    public function supports($data, array $context = []): bool
    {
        return $data instanceof User;
    }

    /**
     * @param User $data
     * @return bool|object|void
     */
    public function persist($data, array $context = [])
    {

        if (isset($context['collection_operation_name']) && $context['collection_operation_name'] === 'post_resetting_password') {
            return $data;
        }
        $data->setUsername($data->getLogin());

        $password = 123456;

        if (isset($context['collection_operation_name']) && $context['collection_operation_name'] == "post") {
            $data->setPassword($this->passwordEncoder->encodePassword($data, $password));
        }

        $this->dataPersister->persist($data);
        $this->dataPersister->flush();

    }

    public function remove($data, array $context = [])
    {
        // TODO: Implement remove() method.
    }


}
