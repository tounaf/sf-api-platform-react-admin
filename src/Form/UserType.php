<?php

namespace App\Form;

use App\Entity\Entite;
use App\Entity\Profile;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email')
            ->add('login')
            ->add('username')
            ->add('password')
            ->add('nom')
            ->add('prenom')
            ->add('situationMatrimoniale')
            ->add('civilite')
            ->add('dateDeNaissance')
            ->add('photoProfile')
            ->add('competence')
            ->add('dateEntree')
            ->add('dateSortie')
            ->add('remarque')
            ->add('enable')
            ->add('entite', EntityType::class, array(
                'class' => Entite::class,
                'label' => 'Entité',
                'choice_label' => 'libelle',
                'placeholder' => 'Choisir entité'
            ))
            ->add('profiles', EntityType::class, array(
                'class' => Profile::class,
                'multiple' => true,
                'expanded' => true,
                'placeholder' => 'Profile(s)',
                'choice_label' => 'libelle'
            ))
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
