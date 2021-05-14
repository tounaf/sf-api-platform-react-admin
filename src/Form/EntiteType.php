<?php

namespace App\Form;

use App\Entity\Entite;
use App\Entity\Site;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EntiteType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('libelle')
            ->add('code')
            ->add('createAt')
            ->add('updatedAt')
            ->add('entiteType', EntityType::class, array(
                'class' => \App\Entity\EntiteType::class,
                'label' => 'Type',
                'placeholder' => 'Choisissez le type',
                'choice_label' => 'libelle'
            ))
            ->add('site', EntityType::class, array(
                'class' => Site::class,
                'label' => 'Site',
                'placeholder' => 'Cité',
                'choice_label' => 'libelle'
            ))
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Entite::class,
        ]);
    }
}
