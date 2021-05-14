<?php
/**
 * Created by PhpStorm.
 * User: nambinina2
 * Date: 14/05/2021
 * Time: 14:53
 */

namespace App\Listener;


use App\Entity\User;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserListener
{
    private $encoder;
    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->encoder = $passwordEncoder;
    }

    public function prePersist(User $user, LifecycleEventArgs $eventArgs)
    {
        $user->setPassword($this->encoder->encodePassword($user, $user->getPassword()));
    }
}