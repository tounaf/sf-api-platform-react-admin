<?php

namespace App\Entity;

use App\Repository\DroitRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=DroitRepository::class)
 */
class Droit
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToMany(targetEntity=Fonctionnalite::class, mappedBy="droits")
     */
    private $yes;

    public function __construct()
    {
        $this->yes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection|Fonctionnalite[]
     */
    public function getYes(): Collection
    {
        return $this->yes;
    }

    public function addYe(Fonctionnalite $ye): self
    {
        if (!$this->yes->contains($ye)) {
            $this->yes[] = $ye;
            $ye->addDroit($this);
        }

        return $this;
    }

    public function removeYe(Fonctionnalite $ye): self
    {
        if ($this->yes->removeElement($ye)) {
            $ye->removeDroit($this);
        }

        return $this;
    }
}
