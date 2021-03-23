<?php

namespace App\Repository;

use App\Entity\EntiteType;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method EntiteType|null find($id, $lockMode = null, $lockVersion = null)
 * @method EntiteType|null findOneBy(array $criteria, array $orderBy = null)
 * @method EntiteType[]    findAll()
 * @method EntiteType[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EntiteTypeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EntiteType::class);
    }

    // /**
    //  * @return EntiteType[] Returns an array of EntiteType objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?EntiteType
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
