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
            ->add('createAt')
            ->add('entite', EntityType::class, array(
                'class' => Entite::class,
                'choice_label' => 'libelle'
            ))
            ->add('details', CollectionType::class, [
                'label' => 'Details',
                // each entry in the array will be an "email" field
                // these options are passed to each "email" type
                'allow_add' => true,
                'allow_delete' => true
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Achat::class,
        ]);
    }
}
