<?php
/**
 * Created by PhpStorm.
 * User: nambinina2
 * Date: 17/05/2021
 * Time: 11:13
 */

namespace App\Listener;


use App\Entity\Ingredient;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use Symfony\Component\Security\Core\Security;

/**
 * Class IngredientListener
 * @package App\Listener
 */
class IngredientListener
{

    /**
     * @var null|\Symfony\Component\Security\Core\User\UserInterface
     */
    private $user;

    /**
     * IngredientListener constructor.
     * @param Security $security
     */
    public function __construct(Security $security)
    {
        $this->user = $security->getUser();
    }

    /**
     * @param Ingredient $ingredient
     * @param LifecycleEventArgs $
     */
    public function prePersist(Ingredient $ingredient, LifecycleEventArgs $args)
    {
        $ingredient->setCreateBy($this->user);
    }
}