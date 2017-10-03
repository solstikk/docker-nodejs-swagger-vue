A repo to start from when developing a service using:
* Vue.js - Frontend framework
* Swagger - API design
* Node.js - Web Server
* ESLint - Linting
* Nodemon - Autorestart for development
* Webpack - Building web assets & hot reloading for development
* Docker - Containerization
* Docker Compose - Building and development


Test drive the app:
1. Build and run it either...
  * ... in production mode: `docker-compose up --build`
  * ... or in development mode: `docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build`
2. Visit the Swagger UI at http://localhost:8080/docs/
3. Visit the web UI at http://localhost:8080
