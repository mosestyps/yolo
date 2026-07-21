# Project Explanation: Docker Containerization, Stage 1, & Stage 2 Infrastructure Automation

## 1. Choice of Base Images
* **Backend:** Used `node:18-alpine` because it is a lightweight Linux distribution specifically designed for Node.js applications, significantly reducing container size while providing all necessary dependencies.
* **Client:** Utilized a multi-stage build starting with `node:14-alpine` to compile the React build, switching to `nginx:alpine` to serve static files efficiently.

## 2. Dockerfile Directives & Optimization
* Used `WORKDIR /app` to maintain a clean filesystem within the container.
* Copied `package.json` before source code to leverage **Docker's layer caching**, speeding up builds when only source code changes.
* Used `EXPOSE` to explicitly define listening ports (5000 for backend, 80 for Nginx).

## 3. Docker Compose Networking & Volumes
* **Networking:** Services communicate over a custom bridge network (`app-net`), allowing seamless internal routing.
* **Persistence:** Configured a named MongoDB volume mapped to `/data/db` to ensure product data persists even if containers are destroyed.

## 4. Stage 1 Architectural Decisions & Execution Order
1. **Local Virtualization with Vagrant:** Utilized the `ubuntu/jammy64` (Ubuntu 22.04 LTS) box to guarantee a consistent, isolated environment identical across hosts.
2. **Configuration Management via Ansible:** Automated container deployment and tool installations via idempotent playbooks.
3. **Execution Order:** 
   * Vagrant boots the Ubuntu VM and sets up SSH.
   * Ansible runs playbooks locally to install Docker and configure environments.
   * Docker pulls images, sets up networking, and starts containers with automatic restart policies.

---

## 5. Stage 2 Cloud Infrastructure & Terraform Integration
1. **Infrastructure as Code (IaC) with Terraform:** 
   * Defined configuration in `Stage_two/terraform/main.tf` to programmatically provision an AWS EC2 instance (`t3.micro`) within a secure VPC and subnet layout.
   * Automated key generation (`moses-key.pem`) and state management (`terraform.tfstate`).
2. **Remote Configuration Management (Ansible):**
   * Transitioned from local Vagrant execution to remote AWS execution by dynamically passing the provisioned server IP as the Ansible inventory target.
   * Used secure SSH keys (`chmod 400 moses-key.pem`) and remote user permissions (`-u ubuntu --become`) to configure the remote host.
3. **Execution Flow & Order of Operations:**
   * Terraform provisions cloud infrastructure and outputs the instance public IP.
   * The Ansible playbook targets the remote server, installs necessary dependencies, pulls repository images, and configures port mappings (`3000` for client UI and `5000` for backend services).

## Troubleshooting Notes
* If build errors occur, ensure dependencies are properly installed within directories and that host port `3000` correctly forwards to container port `80`.
* For cloud deployments, verify that your Terraform private key permissions (`chmod 400 moses-key.pem`) are correctly set before executing the Ansible playbook.