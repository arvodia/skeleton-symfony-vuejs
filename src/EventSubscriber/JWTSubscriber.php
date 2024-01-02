<?php

namespace App\EventSubscriber;

use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class JWTSubscriber implements EventSubscriberInterface {

    public function onLexikJwtAuthenticationOnJwtCreated(JWTCreatedEvent $event): void {
        /*
         * dev test
        $data = $event->getData();
        $data['exp'] = time() + 15;
        $event->setData($data);
         */
    }

    public static function getSubscribedEvents(): array {
        return [
            'lexik_jwt_authentication.on_jwt_created' => 'onLexikJwtAuthenticationOnJwtCreated',
        ];
    }
}
