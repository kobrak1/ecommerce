# E-Commerce Website

This project is a full-stack e-commerce website built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides a platform for users to browse products, add them to the cart, and proceed with the checkout process.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization
- Product catalog with search functionality
- Shopping cart and checkout process
- User profile management
- Admin dashboard for product and user management
- Responsive design for a seamless experience on different devices

## Technologies Used

- **Frontend:**
  - React.js
  - Redux for state management
  - React Router for navigation
  - Axios for API requests
  - Bootstrap for styling

- **Backend:**
  - Node.js with Express.js
  - MongoDB for database storage
  - Mongoose for MongoDB object modeling
  - JWT for authentication
  - Bcrypt for password hashing

- **Deployment:**
  - Render for backend deployment
  - Render for frontend deployment
  - MongoDB Atlas for database hosting

## Getting Started

To get started with the project, follow the steps below:

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/e-commerce.git
   cd e-commerce

2. Install dependencies for both frontend and backend:

    ```bash
    cd client
    npm install
    cd ../api
    npm install

### Configuration

1. Create a .env file in the server directory and add the following environment variables:

    ```bash
    NODE_ENV=development
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret

### Running the Application

1. Start the backend server:

    ```bash
    cd api
    npm start
    
2. Start the frontend development server:

    ```bash
    cd client
    npm run dev

### License
This project is licensed under the MIT License - see the LICENSE() file for details.    



