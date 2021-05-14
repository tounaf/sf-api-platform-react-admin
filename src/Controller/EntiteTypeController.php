<?php

namespace App\Controller;

use App\Entity\EntiteType;
use App\Form\EntiteTypeType;
use App\Repository\EntiteTypeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/type/entite")
 */
class EntiteTypeController extends AbstractController
{
    /**
     * @Route("/", name="entite_type_index", methods={"GET"})
     */
    public function index(EntiteTypeRepository $entiteTypeRepository): Response
    {
        return $this->render('entite_type/index.html.twig', [
            'entite_types' => $entiteTypeRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="entite_type_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $entiteType = new EntiteType();
        $form = $this->createForm(EntiteTypeType::class, $entiteType);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($entiteType);
            $entityManager->flush();

            return $this->redirectToRoute('entite_type_index');
        }

        return $this->render('entite_type/new.html.twig', [
            'entite_type' => $entiteType,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="entite_type_show", methods={"GET"})
     */
    public function show(EntiteType $entiteType): Response
    {
        return $this->render('entite_type/show.html.twig', [
            'entite_type' => $entiteType,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="entite_type_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, EntiteType $entiteType): Response
    {
        $form = $this->createForm(EntiteTypeType::class, $entiteType);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('entite_type_index');
        }

        return $this->render('entite_type/edit.html.twig', [
            'entite_type' => $entiteType,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="entite_type_delete", methods={"DELETE"})
     */
    public function delete(Request $request, EntiteType $entiteType): Response
    {
        if ($this->isCsrfTokenValid('delete'.$entiteType->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($entiteType);
            $entityManager->flush();
        }

        return $this->redirectToRoute('entite_type_index');
    }
}
