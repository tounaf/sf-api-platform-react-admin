<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\FormuleProduitRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=FormuleProduitRepository::class)
 */
class FormuleProduit
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Produit::class, inversedBy="formuleProduits")
     * @ORM\JoinColumn(nullable=false)
     */
    private $produit;

    /**
     * @ORM\OneToMany(targetEntity=FormuleDetail::class, mappedBy="formuleProduit")
     */
    private $formuleDetails;

    public function __construct()
    {
        $this->formuleDetails = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProduit(): ?Produit
    {
        return $this->produit;
    }

    public function setProduit(?Produit $produit): self
    {
        $this->produit = $produit;

        return $this;
    }

    /**
     * @return Collection|FormuleDetail[]
     */
    public function getFormuleDetails(): Collection
    {
        return $this->formuleDetails;
    }

    public function addFormuleDetail(FormuleDetail $formuleDetail): self
    {
        if (!$this->formuleDetails->contains($formuleDetail)) {
            $this->formuleDetails[] = $formuleDetail;
            $formuleDetail->setFormuleProduit($this);
        }

        return $this;
    }

    public function removeFormuleDetail(FormuleDetail $formuleDetail): self
    {
        if ($this->formuleDetails->removeElement($formuleDetail)) {
            // set the owning side to null (unless already changed)
            if ($formuleDetail->getFormuleProduit() === $this) {
                $formuleDetail->setFormuleProduit(null);
            }
        }

        return $this;
    }
}
