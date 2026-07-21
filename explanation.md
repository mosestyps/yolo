# Project Explanation: Docker Containerization & Stage 1 Automation

## 1. Choice of Base Images
- **Backend:** I used `node:18-alpine` because it is a lightweight Linux distribution specifically designed for Node.js applications, significantly reducing container size while providing all necessary dependencies.
- **Client:** Utilized a multi-stage build starting with `node:14-alpine` to compile the React build, switching to `nginx:alpine` to serve static files efficiently.

## 2. Dockerfile Directives & Optimization
- Used `WORKDIR /app` to maintain a clean filesystem within the container.
- Copied `package.json` before source code to leverage **Docker's layer caching**, speeding up builds when only source code changes.
- Used `EXPOSE` to explicitly define listening ports (5000 for backend, 80 for Nginx).

## 3. Docker Compose Networking & Volumes
- **Networking:** Services communicate over a custom bridge network (`app-net`), allowing seamless internal routing.
- **Persistence:** Configured a named MongoDB volume mapped to `/data/db` to ensure product data persists even if containers are destroyed.

## 4. Stage 1 Architectural Decisions & Execution Order
1. **Local Virtualization with Vagrant:** Utilized the `ubuntu/jammy64` (Ubuntu 22.04 LTS) box to guarantee a consistent, isolated environment identical across hosts.
2. **Configuration Management via Ansible:** Automated container deployment and tool installations via idempotent playbooks.
3. **Execution Order:** 
   * Vagrant boots the Ubuntu VM and sets up SSH.
   * Ansible runs playbooks locally to install Docker and configure environments.
   * Docker pulls images, sets up networking, and starts containers with automatic restart policies.

## Troubleshooting Notes
- If build errors occur, ensure dependencies are properly installed within directories and that host port `3000` correctly forwards to container port `80`.