# YOLO Clothing Store - Stage 1: Local Infrastructure Automation

## Overview
YOLO is a full-stack clothing store web application built using React, Node.js, Express, and MongoDB. Stage 1 automates the provisioning of this application inside an Ubuntu Virtual Machine using Vagrant, Ansible, and Docker.

## Features
* Display available products
* Add new products
* Update existing products
* Delete products
* Responsive user interface

## Technologies Used
* React (Frontend)
* Node.js & Express.js (Backend)
* MongoDB & Mongoose (Database)
* Vagrant (`ubuntu/jammy64` / Ubuntu 22.04 LTS) (Virtualization)
* Ansible (Configuration Management)
* Docker (Containerization)

## Architecture & Port Mapping
* **`yolo-client`:** Frontend interface mapping host port `3000` to container port `80`.
* **`yolo-backend`:** REST API service running on port `5000`.
* **`app-mongo`:** MongoDB instance running on port `27017`.

## Getting Started & Deployment
1. **Clone the repository:**
   ```bash
   git clone [https://github.com/mosestyps/yolo.git](https://github.com/mosestyps/yolo.git)
   cd yolo
## Author

Moses Njenga


