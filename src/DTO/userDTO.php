<?php

namespace App\DTO;

use Symfony\Component\Validator\Constraints as Assert;

class userDTO {

    public function __construct(
            #[Assert\Email()]
            #[Assert\NotBlank()]
            public readonly string $email,
            #[Assert\Length(min: 6, max: 4096, minMessage: "user.passeword_minmum_caracter", maxMessage: "user.passeword_maximum_caracter")]
            public readonly string $password
    ) {
    }
}
