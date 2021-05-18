<?php

namespace App\Repository;

use App\Entity\ProduitType;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ProduitType|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProduitType|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProduitType[]    findAll()
 * @method ProduitType[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProduitTypeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProduitType::class);
    }

    // /**
    //  * @return ProduitType[] Returns an array of ProduitType objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ProduitType
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
