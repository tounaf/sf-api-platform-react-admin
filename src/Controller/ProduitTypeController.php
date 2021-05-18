<?php

namespace App\Controller;

use App\Entity\ProduitType;
use App\Form\ProduitTypeType;
use App\Repository\ProduitTypeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/produit/type")
 */
class ProduitTypeController extends AbstractController
{
    /**
     * @Route("/", name="produit_type_index", methods={"GET"})
     */
    public function index(ProduitTypeRepository $produitTypeRepository): Response
    {
        return $this->render('produit_type/index.html.twig', [
            'produit_types' => $produitTypeRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="produit_type_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $produitType = new ProduitType();
        $form = $this->createForm(ProduitTypeType::class, $produitType);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($produitType);
            $entityManager->flush();

            return $this->redirectToRoute('produit_type_index');
        }

        return $this->render('produit_type/new.html.twig', [
            'produit_type' => $produitType,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="produit_type_show", methods={"GET"})
     */
    public function show(ProduitType $produitType): Response
    {
        return $this->render('produit_type/show.html.twig', [
            'produit_type' => $produitType,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="produit_type_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, ProduitType $produitType): Response
    {
        $form = $this->createForm(ProduitTypeType::class, $produitType);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('produit_type_index');
        }

        return $this->render('produit_type/edit.html.twig', [
            'produit_type' => $produitType,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="produit_type_delete", methods={"DELETE"})
     */
    public function delete(Request $request, ProduitType $produitType): Response
    {
        if ($this->isCsrfTokenValid('delete'.$produitType->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($produitType);
            $entityManager->flush();
        }

        return $this->redirectToRoute('produit_type_index');
    }
}
