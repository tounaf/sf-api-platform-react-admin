<?php

namespace App\Controller;

use App\Entity\DetailAchat;
use App\Form\DetailAchatType;
use App\Repository\DetailAchatRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/detail/achat")
 */
class DetailAchatController extends AbstractController
{
    /**
     * @Route("/", name="detail_achat_index", methods={"GET"})
     */
    public function index(DetailAchatRepository $detailAchatRepository): Response
    {
        return $this->render('detail_achat/index.html.twig', [
            'detail_achats' => $detailAchatRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="detail_achat_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $detailAchat = new DetailAchat();
        $form = $this->createForm(DetailAchatType::class, $detailAchat);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($detailAchat);
            $entityManager->flush();

            return $this->redirectToRoute('detail_achat_index');
        }

        return $this->render('detail_achat/new.html.twig', [
            'detail_achat' => $detailAchat,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="detail_achat_show", methods={"GET"})
     */
    public function show(DetailAchat $detailAchat): Response
    {
        return $this->render('detail_achat/show.html.twig', [
            'detail_achat' => $detailAchat,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="detail_achat_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, DetailAchat $detailAchat): Response
    {
        $form = $this->createForm(DetailAchatType::class, $detailAchat);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('detail_achat_index');
        }

        return $this->render('detail_achat/edit.html.twig', [
            'detail_achat' => $detailAchat,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="detail_achat_delete", methods={"DELETE"})
     */
    public function delete(Request $request, DetailAchat $detailAchat): Response
    {
        if ($this->isCsrfTokenValid('delete'.$detailAchat->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($detailAchat);
            $entityManager->flush();
        }

        return $this->redirectToRoute('detail_achat_index');
    }
}
