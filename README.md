# YOLO Clothing Store - Stage 1 & Stage 2 Infrastructure Automation

## Overview
YOLO is a full-stack clothing store web application built using React, Node.js, Express, and MongoDB. This project implements full infrastructure automation across two stages:
* **Stage 1:** Local provisioning inside an Ubuntu Virtual Machine using Vagrant, Ansible, and Docker.
* **Stage 2:** Cloud provisioning on AWS EC2 using Terraform and automated configuration management via Ansible.

## Features
* Display available products
* Add new products
* Update existing products
* Delete products
* Responsive user interface

## Technologies Used
* **React** (Frontend)
* **Node.js & Express.js** (Backend)
* **MongoDB & Mongoose** (Database)
* **Vagrant & Ubuntu 22.04 LTS** (Local Virtualization)
* **Terraform & AWS EC2** (Cloud Infrastructure Provisioning)
* **Ansible** (Configuration Management)
* **Docker** (Containerization)

## Architecture & Port Mapping
* **`yolo-client`:** Frontend interface mapping host port `3000` to container port `80`.
* **`yolo-backend`:** REST API service running on port `5000`.
* **`app-mongo`:** MongoDB instance running on port `27017`.

---

## Getting Started & Deployment

### 1. Clone the Repository
```bash
git clone [https://github.com/mosestyps/yolo.git](https://github.com/mosestyps/yolo.git)
cd yolo

##Author

Moses Njenga
