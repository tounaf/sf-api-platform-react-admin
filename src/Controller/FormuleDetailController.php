<?php

namespace App\Controller;

use App\Entity\FormuleDetail;
use App\Form\FormuleDetailType;
use App\Repository\FormuleDetailRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/formule/detail")
 */
class FormuleDetailController extends AbstractController
{
    /**
     * @Route("/", name="formule_detail_index", methods={"GET"})
     */
    public function index(FormuleDetailRepository $formuleDetailRepository): Response
    {
        return $this->render('formule_detail/index.html.twig', [
            'formule_details' => $formuleDetailRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="formule_detail_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $formuleDetail = new FormuleDetail();
        $form = $this->createForm(FormuleDetailType::class, $formuleDetail);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($formuleDetail);
            $entityManager->flush();

            return $this->redirectToRoute('formule_detail_index');
        }

        return $this->render('formule_detail/new.html.twig', [
            'formule_detail' => $formuleDetail,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="formule_detail_show", methods={"GET"})
     */
    public function show(FormuleDetail $formuleDetail): Response
    {
        return $this->render('formule_detail/show.html.twig', [
            'formule_detail' => $formuleDetail,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="formule_detail_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, FormuleDetail $formuleDetail): Response
    {
        $form = $this->createForm(FormuleDetailType::class, $formuleDetail);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('formule_detail_index');
        }

        return $this->render('formule_detail/edit.html.twig', [
            'formule_detail' => $formuleDetail,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="formule_detail_delete", methods={"DELETE"})
     */
    public function delete(Request $request, FormuleDetail $formuleDetail): Response
    {
        if ($this->isCsrfTokenValid('delete'.$formuleDetail->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($formuleDetail);
            $entityManager->flush();
        }

        return $this->redirectToRoute('formule_detail_index');
    }
}
