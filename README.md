# Ai extract API

## How to

To use this project take care about ;

- docker-compose.yml configuration
	- > /bin/bash/ docker compose  up
	- or for discret mode
	- > /bin/bash/ docker compose  up -d

- .env configuration (db user, name, port, password, etc.)

- Adonis Command-line Environment
  - > node ace

- Lancer le serveur
  - > node ace serve --watch

- Créer un controller CRUD
  - > node ace make:controller posts --resource
