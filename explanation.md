# Project Explanation: Docker Containerization

## 1. Choice of Base Images
- **Backend:** I used `node:18-alpine` because it is a lightweight Linux distribution specifically designed for Node.js applications. This significantly reduces the container size while providing all necessary dependencies.
- **Client:** I utilized a multi-stage build starting with `node:18-alpine` to compile the React build, and then switched to `nginx:alpine` to serve the static files. This is the industry standard for production, as Nginx is highly optimized for performance and `nginx:alpine` is extremely small.

## 2. Dockerfile Directives
- I used `WORKDIR /app` to maintain a clean filesystem within the container.
- I copied `package.json` before the rest of the code to leverage **Docker's layer caching**, which speeds up builds if only the source code changes.
- I used `EXPOSE` to explicitly define the ports the containers listen on (5000 for backend, 80 for Nginx).

## 3. Docker Compose Networking & Volumes
- **Networking:** The services are connected within a bridge network defined by Docker Compose. The backend can communicate with the database service by simply using `db:27017`.
- **Persistence:** I defined a named volume `mongo-data` mapped to `/data/db`. This ensures that even if the containers are destroyed, the product data persists in the host machine's storage.

## 4. Git Workflow
- I used a structured Git approach, ensuring that every significant change (creating a Dockerfile, setting up Compose, adding functionality) was committed with a descriptive message to track the development history.