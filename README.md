# YOLO Clothing Store – Stage 1 & Stage 2 Infrastructure Automation

## Overview

YOLO is a full-stack clothing store web application built using **React**, **Node.js**, **Express**, and **MongoDB**. The project demonstrates Infrastructure as Code (IaC), configuration management, virtualization, cloud deployment, and containerization using modern DevOps tools.

The project is divided into two stages:

* **Stage 1:** Local infrastructure automation using **Vagrant**, **Ansible**, **Docker**, and **Docker Compose**.
* **Stage 2:** Cloud infrastructure provisioning on **AWS EC2** using **Terraform**, followed by automated server configuration using **Ansible**.

---

# Features

* View available products
* Add new products
* Update existing products
* Delete products
* Responsive React frontend
* RESTful Express backend
* MongoDB database persistence
* Dockerized microservices

---

# Technologies Used

## Frontend

* React
* Bootstrap

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose

## DevOps

* Docker
* Docker Compose
* Vagrant
* Ubuntu 22.04 LTS
* Ansible
* Terraform
* AWS EC2

---

# Project Structure

```text
yolo/
│
├── backend/
├── client/
├── docker-compose.yml
├── Vagrantfile
├── ansible/
│   ├── playbook.yml
│   ├── inventory
│   └── roles/
│
├── Stage_two/
│   ├── terraform/
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   └── outputs.tf
│   │
│   ├── ansible/
│   └── explanation.md
│
└── README.md