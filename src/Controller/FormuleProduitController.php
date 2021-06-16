<?php

namespace App\Controller;

use App\Entity\FormuleProduit;
use App\Form\FormuleProduitType;
use App\Repository\FormuleProduitRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/formule/produit")
 */
class FormuleProduitController extends AbstractController
{
    /**
     * @Route("/", name="formule_produit_index", methods={"GET"})
     */
    public function index(FormuleProduitRepository $formuleProduitRepository): Response
    {
        return $this->render('formule_produit/index.html.twig', [
            'formule_produits' => $formuleProduitRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="formule_produit_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $formuleProduit = new FormuleProduit();
        $form = $this->createForm(FormuleProduitType::class, $formuleProduit);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($formuleProduit);
            $entityManager->flush();

            return $this->redirectToRoute('formule_produit_index');
        }

        return $this->render('formule_produit/new.html.twig', [
            'formule_produit' => $formuleProduit,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="formule_produit_show", methods={"GET"})
     */
    public function show(FormuleProduit $formuleProduit): Response
    {
        return $this->render('formule_produit/show.html.twig', [
            'formule_produit' => $formuleProduit,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="formule_produit_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, FormuleProduit $formuleProduit): Response
    {
        $form = $this->createForm(FormuleProduitType::class, $formuleProduit);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('formule_produit_index');
        }

        return $this->render('formule_produit/edit.html.twig', [
            'formule_produit' => $formuleProduit,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="formule_produit_delete", methods={"DELETE"})
     */
    public function delete(Request $request, FormuleProduit $formuleProduit): Response
    {
        if ($this->isCsrfTokenValid('delete'.$formuleProduit->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($formuleProduit);
            $entityManager->flush();
        }

        return $this->redirectToRoute('formule_produit_index');
    }
}
