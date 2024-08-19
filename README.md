# E-Commerce Website

![img1](https://github.com/kobrak1/e-commerce/assets/114083611/3313cab8-bdee-4aa7-8a17-c8a4f40bff47)

![img2](https://github.com/kobrak1/e-commerce/assets/114083611/964950fb-f69b-4083-806f-9994de6be8e1)

![img3](https://github.com/kobrak1/e-commerce/assets/114083611/21651845-caa3-441e-93b2-2acdb1ff1691)

![img5](https://github.com/kobrak1/e-commerce/assets/114083611/1311f828-8699-4fe1-9029-ee6768c744f3)

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

### IMPORTANT!!!
You can test monitor the admin panel by logging in with these credentials;
-username: admin
-email: admin@gmail.com
-password: admin123

### License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/kobrak1/e-commerce/blob/main/LICENSE) file for details.    



