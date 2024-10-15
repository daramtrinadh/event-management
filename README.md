# Event Discovery App

The **Event Discovery App** is a full-stack web application designed to help users discover and stay updated with events. It allows users to create an account, log in, and browse through a list of recommended and upcoming events, with secure access through user authentication.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [API Endpoints](#api-endpoints)
- [Technical Decisions](#technical-decisions)

## Features

- **User Authentication**: Secure signup and login using JWT for token-based authentication, with password hashing using bcrypt.
- **Recommended Events**: Displays a curated list of events that may interest users.
- **Upcoming Events**: Infinite scrolling feature allows users to load more events as they scroll down.
- **Secure API Communication**: Token-based authentication ensures that sensitive data remains protected during client-server interactions.

## Technology Stack

- **Frontend**: React.js
- **Backend**: Express.js with Node.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt
- **Environment Management**: dotenv for environment variables
- **Others**: CORS, Body-parser

## API Endpoints
POST /event/signup: Registers a new user.
Request Body: { "username": "string", "email": "string", "password": "string" }
Response: 201 Created with a message upon successful registration.
POST /event/login: Logs in a user.
Request Body: { "email": "string", "password": "string" }
Response: 200 OK with a JWT token for authenticated access.

## Technical Decision
1)Technology Choices
  Frontend: React was chosen for its ability to build dynamic, component-based UIs and manage state efficiently.
  Backend: Express.js with Node.js simplifies the creation of RESTful APIs.
  Database: MongoDB’s document-oriented storage is suitable for managing dynamic user and event data.
  Authentication: JWT for secure, token-based authentication, ensuring that user sessions are stateless and scalable.
2)Security Measures
  Password Hashing: Passwords are hashed using bcrypt before storage, providing an additional layer of security.
  Environment Variables: dotenv is used to manage sensitive data like MongoDB URI and JWT secret, keeping them secure.
3)API Design
  RESTful API structure provides clear and simple routes for user actions, facilitating easy integration with the frontend.
  Secure API Communication: The app uses tokens for authenticated requests, ensuring secure communication between client and server.
4)Performance Optimization
  Infinite Scrolling: Implemented on the frontend for loading upcoming events, enhancing user experience by reducing initial load times.
  Lazy Loading: Dynamically fetches additional events as the user scrolls down, ensuring a smoother browsing experience.
