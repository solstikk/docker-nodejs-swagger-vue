A repo to start from when developing a service using:
* Webpack - Building web assets & hot reloading for development
* Node.js - Web Server
* Nodemon - Autorestart
* ESLint - Linting
* Swagger - API design
* Docker - Containerization
* Docker Compose - Building and development


Test drive the app:
1. Build and run it either...
  * ... in production mode: `docker-compose up --build`
  * ... or in development mode: `docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build`
2. Visit the Swagger UI at http://localhost:3000/docs/
3. Visit the web UI at http://localhost:3000/?message=hello
