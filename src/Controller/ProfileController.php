<?php

namespace App\Controller;

use App\DTO\userEditDTO;
use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\MapRequestPayload;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
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

    #[Route('/api/account/edit', name: 'app_account_edit')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function edit(#[MapRequestPayload] userEditDTO $userEditDTO, UserPasswordHasherInterface $passwordHasher, ManagerRegistry $doctrine): Response {
        /** @var User $user */
        $user = $this->getUser();
        if (!$passwordHasher->isPasswordValid($user, $userEditDTO->current_password)) {
            return new JsonResponse(['detail' => 'The current password is invalid.'], Response::HTTP_FORBIDDEN);
        }
        if ($userEditDTO->email) {
            $user->setEmail($userEditDTO->email);
        }
        if ($userEditDTO->password) {
            $user->setPassword($passwordHasher->hashPassword($user, $userEditDTO->password));
        }
        $doctrine->getManager()->flush();
        return new JsonResponse(['message' => 'user edited successfully'], Response::HTTP_OK);
    }
}
