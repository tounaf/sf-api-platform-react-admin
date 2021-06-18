<?php

namespace App\Repository;

use App\Entity\FormuleProduit;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method FormuleProduit|null find($id, $lockMode = null, $lockVersion = null)
 * @method FormuleProduit|null findOneBy(array $criteria, array $orderBy = null)
 * @method FormuleProduit[]    findAll()
 * @method FormuleProduit[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FormuleProduitRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FormuleProduit::class);
    }

    // /**
    //  * @return FormuleProduit[] Returns an array of FormuleProduit objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('f.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?FormuleProduit
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
