# Project Explanation: Docker Containerization, Stage One, and Stage Two Infrastructure Automation

## 1. Choice of Base Images

### Backend

The backend container uses the **Node.js Alpine image** because Alpine Linux is a lightweight distribution that significantly reduces the overall image size while still providing everything required to run the Express application. A smaller image improves download speed, deployment time, and storage efficiency.

### Frontend

The frontend uses a **multi-stage Docker build**. During the first stage, a Node.js image is used to install dependencies and build the React application. Once the production build is generated, the compiled static files are copied into an **Nginx Alpine** image. Nginx is then used to efficiently serve the React application, resulting in a much smaller and more secure production image since development dependencies are excluded.

---

# 2. Dockerfile Directives and Optimisation

Several Docker best practices were applied throughout the project to improve efficiency and maintainability.

* **WORKDIR** was used to create a dedicated application directory inside each container, keeping the filesystem organised.

* **COPY package.json** was executed before copying the rest of the application source code. This allows Docker to cache the dependency installation layer so that dependencies are only reinstalled when the package configuration changes.

* **RUN npm install** installs all required Node.js packages before the application source code is copied.

* **COPY . .** copies the application source code into the container after dependencies have been installed.

* **EXPOSE** documents the ports used by each service:

  * Backend: **5000**
  * Frontend (Nginx): **80**

These optimisations reduce build time and improve deployment performance by making better use of Docker layer caching.

---

# 3. Docker Compose Networking and Persistence

Docker Compose is responsible for orchestrating all application services.

### Custom Network

All containers are attached to the same custom bridge network (**app-net**), allowing services to communicate internally using container names instead of IP addresses.

For example:

* Backend connects to MongoDB using the MongoDB service name.
* Frontend communicates with the backend through the published backend endpoint.

Using a dedicated Docker network isolates application traffic and simplifies service discovery.

### Persistent Storage

MongoDB uses a **named Docker volume** mounted to:

```text
/data/db