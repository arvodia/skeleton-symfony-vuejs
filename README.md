# skeleton-symfony-vuejs

A web application skeleton using vuejs, vite and Symfony 6

## Feature

  - login
  - register
  - account setting
  - translate
  - create token
  - systeme refresh token
  - permission on the road
  - security dashboard with a ROLE_ADMIN role

## install

```
composer install
npm install
npm run build
php bin/console doctrine:database:create
php bin/console doctrine:migration:migrate
php bin/console lexik:jwt:generate-keypair
```

## configure

configure the `refresh_token_path` variable in the `assets/api/apiPrivate.js` file

## sending async email

in `config/packages/messenger.yaml` uncomment the variable `Symfony\Component\Mailer\Messenger\SendEmailMessage: async`

## todo

  - if you delete a user you must also delete it in the `refresh_token` table