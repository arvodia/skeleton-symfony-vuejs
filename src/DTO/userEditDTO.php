<?php

namespace App\DTO;

use Symfony\Component\Validator\Constraints as Assert;

class userEditDTO {

    public function __construct(
            #[Assert\Length(min: 6, max: 4096, minMessage: "user.passeword_minmum_caracter", maxMessage: "user.passeword_maximum_caracter")]
            public readonly string $current_password,
            #[Assert\Email()]
            public $email = null,
            #[Assert\Length(min: 6, max: 4096, minMessage: "user.passeword_minmum_caracter", maxMessage: "user.passeword_maximum_caracter")]
            public $password = null
    ) {
        
    }
}
