<?php

namespace App\Form;

use App\Entity\Achat;
use App\Entity\DetailAchat;
use App\Entity\Entite;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AchatType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('entite', EntityType::class, array(
                'class' => Entite::class,
                'choice_label' => 'libelle'
            ))
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Achat::class,
        ]);
    }
}
