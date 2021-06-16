<?php

namespace App\Repository;

use App\Entity\FormuleDetail;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method FormuleDetail|null find($id, $lockMode = null, $lockVersion = null)
 * @method FormuleDetail|null findOneBy(array $criteria, array $orderBy = null)
 * @method FormuleDetail[]    findAll()
 * @method FormuleDetail[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FormuleDetailRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FormuleDetail::class);
    }

    // /**
    //  * @return FormuleDetail[] Returns an array of FormuleDetail objects
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
    public function findOneBySomeField($value): ?FormuleDetail
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
