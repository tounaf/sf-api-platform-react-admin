<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\EntiteRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\SerializedName;

/**
 * @ApiResource(
 *     denormalizationContext={"groups"={"entite:write"}},
 *     normalizationContext={"groups"={"entite:read"}}
 * )
 * @ORM\Entity(repositoryClass=EntiteRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class Entite
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     *
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"entite:read", "entite:write"})
     */
    private $libelle;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"entite:read", "entite:write"})
     */
    private $code;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createAt;

    /**
     * @ORM\Column(type="datetime")
     */
    private $updatedAt;

    /**
     * @ORM\OneToMany(targetEntity=User::class, mappedBy="entite")
     */
    private $users;

    /**
     * @ORM\ManyToOne(targetEntity=EntiteType::class, inversedBy="entites")
     * @Groups({"entite:read", "entite:write"})
     * @SerializedName("type")
     */
    private $entiteType;

    /**
     * @ORM\ManyToOne(targetEntity=Site::class, inversedBy="entites")
     * @Groups({"entite:read", "entite:write"})
     */
    private $site;

    /**
     * @ORM\OneToMany(targetEntity=Achat::class, mappedBy="entite", orphanRemoval=true)
     */
    private $yes;

    public function __construct()
    {
        $this->users = new ArrayCollection();
        $this->createAt = new \DateTime();
        $this->updatedAt = new \DateTime();
        $this->yes = new ArrayCollection();
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

    public function getCreateAt(): ?\DateTimeInterface
    {
        return $this->createAt;
    }

    public function setCreateAt(\DateTimeInterface $createAt): self
    {
        $this->createAt = $createAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users[] = $user;
            $user->setEntite($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->removeElement($user)) {
            // set the owning side to null (unless already changed)
            if ($user->getEntite() === $this) {
                $user->setEntite(null);
            }
        }

        return $this;
    }

    public function getEntiteType(): ?EntiteType
    {
        return $this->entiteType;
    }

    public function setEntiteType(?EntiteType $entiteType): self
    {
        $this->entiteType = $entiteType;

        return $this;
    }

    public function getSite(): ?Site
    {
        return $this->site;
    }

    public function setSite(?Site $site): self
    {
        $this->site = $site;

        return $this;
    }

    /**
     * @ORM\PreUpdate()
     */
    public function preUpdate()
    {
        $this->updatedAt = new \DateTime();
    }

    /**
     * @return Collection|Achat[]
     */
    public function getYes(): Collection
    {
        return $this->yes;
    }

    public function addYe(Achat $ye): self
    {
        if (!$this->yes->contains($ye)) {
            $this->yes[] = $ye;
            $ye->setEntite($this);
        }

        return $this;
    }

    public function removeYe(Achat $ye): self
    {
        if ($this->yes->removeElement($ye)) {
            // set the owning side to null (unless already changed)
            if ($ye->getEntite() === $this) {
                $ye->setEntite(null);
            }
        }

        return $this;
    }
}
