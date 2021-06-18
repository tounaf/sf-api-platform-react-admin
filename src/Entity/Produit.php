<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ProduitRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=ProduitRepository::class)
 */
class Produit
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $libelle;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $code;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $quantite;

    /**
     * @ORM\ManyToOne(targetEntity=ProduitType::class)
     */
    private $typeProduit;

    /**
     * @ORM\Column(type="float")
     */
    private $prix;

    /**
     * @ORM\OneToMany(targetEntity=FormuleProduit::class, mappedBy="produit", orphanRemoval=true)
     */
    private $formuleProduits;

    public function __construct()
    {
        $this->formuleProduits = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = $code;

        return $this;
    }

    public function getQuantite(): ?int
    {
        return $this->quantite;
    }

    public function setQuantite(?int $quantite): self
    {
        $this->quantite = $quantite;

        return $this;
    }

    public function getTypeProduit(): ?ProduitType
    {
        return $this->typeProduit;
    }

    public function setTypeProduit(?ProduitType $typeProduit): self
    {
        $this->typeProduit = $typeProduit;

        return $this;
    }

    public function getPrix(): ?float
    {
        return $this->prix;
    }

    public function setPrix(float $prix): self
    {
        $this->prix = $prix;

        return $this;
    }


    /**
     * @return Collection|FormuleProduit[]
     */
    public function getFormuleProduits(): Collection
    {
        return $this->formuleProduits;
    }

    public function addFormuleProduit(FormuleProduit $formuleProduit): self
    {
        if (!$this->formuleProduits->contains($formuleProduit)) {
            $this->formuleProduits[] = $formuleProduit;
            $formuleProduit->setProduit($this);
        }

        return $this;
    }

    public function removeFormuleProduit(FormuleProduit $formuleProduit): self
    {
        if ($this->formuleProduits->removeElement($formuleProduit)) {
            // set the owning side to null (unless already changed)
            if ($formuleProduit->getProduit() === $this) {
                $formuleProduit->setProduit(null);
            }
        }

        return $this;
    }
}
