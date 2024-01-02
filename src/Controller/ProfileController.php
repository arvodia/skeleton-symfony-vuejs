<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\Serializer\SerializerInterface;

class ProfileController extends AbstractController {

    #[Route('/api/account', name: 'app_account')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function index(SerializerInterface $serializer): Response {
        $json = $serializer->serialize($this->getUser(), 'json', ['groups' => 'getUser']);
        return new JsonResponse($json, Response::HTTP_OK, [], true);
    }
}
