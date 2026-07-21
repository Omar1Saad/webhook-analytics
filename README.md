# Webhook Analytics Backend

A production-ready, highly secure, and thoroughly tested NestJS backend service designed to ingest, validate, store, and analyze incoming webhook events efficiently.

## 🚀 Features

* **Event Ingestion & Persistence:** Securely captures webhook payloads and stores them using TypeORM and PostgreSQL with optimized JSONB column handling.
* **Robust Data Validation:** Utilizes class-validator and class-transformation via global validation pipes to sanitize incoming payloads and prevent malicious or malformed requests.
* **Comprehensive Automated Testing:** Built with a test-first mindset using Jest, achieving high test coverage with rigorous unit testing, mocking strategies, and negative test cases.
* **Containerized Environment:** Fully dockerized with Docker Engine and Docker Compose, ensuring seamless deployment and database synchronization.
* **RESTful Architecture:** Clean separation of concerns following NestJS modular architecture.

---

## 🛠️ Tech Stack

* **Framework:** NestJS (Node.js & TypeScript)
* **Database & ORM:** PostgreSQL, TypeORM
* **Testing:** Jest, Supertest
* **DevOps & Tools:** Docker, Docker Compose, Git / GitHub Actions

---

## 💡 What I Learned & Project Purpose

This project was built as an independent hands-on learning initiative to master enterprise-grade backend development and systems design patterns. Key competencies and engineering practices gained through this project include:

* **Advanced NestJS Architecture:** Structuring applications cleanly using modules, controllers, providers, and DTO validation layers.
* **Database Integration & ORM:** Managing relational databases using TypeORM, configuring entities with PostgreSQL jsonb types, and handling data persistence.
* **Unit Testing & Mocking with Jest:** Writing robust automated test suites, implementing repository and service mocks, handling dependency injection in test modules, and performing both happy-path and negative/error-handling tests.
* **Dockerization:** Containerizing Node.js applications alongside multi-container PostgreSQL instances using Docker Compose for reliable local environments.

---

## 📁 Project Structure

* src/webhook-data/dto/ - Data Transfer Objects & validation rules
* src/webhook-data/entities/ - TypeORM database models & schemas
* src/webhook-data/webhook-data.controller.ts - REST API endpoints handlers
* src/webhook-data/webhook-data.module.ts - NestJS module configuration
* src/webhook-data/webhook-data.service.ts - Business logic & data manipulation
* src/app.module.ts - Root application module
* src/main.ts - Application entry point

---

## ⚙️ Getting Started Locally

### Prerequisites
* Node.js (v18+ recommended)
* Docker & Docker Compose

### Installation & Setup

1. Clone the repository:
   git clone [https://github.com/your-username/webhook-analytics.git](https://github.com/your-username/webhook-analytics.git)
   cd webhook-analytics

2. Install dependencies:
   npm install

3. Run PostgreSQL via Docker Compose:
   docker-compose up -d

4. Run the application:
   npm run start:dev

---

## 🧪 Running Tests

To run the unit tests and check test coverage:
* Run unit tests: npm run test
* Run tests with coverage report: npm run test:cov

---

## 👤 Author

**Omar Saad**
* Software Engineer | Backend & Systems Architecture Enthusiast