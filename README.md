# WorleyBackend

This project provides backend functionalities for user authentication and statistics retrieval. It consists of two main components: `User` and `Statistics`.

## Components

### User

The `User` component handles user creation and authentication. It allows users to sign up, log in, and provides authentication functionality.

### Statistics

The `Statistics` component retrieves sample information that can be filtered by various criteria. It offers endpoints to access filtered data.


## Technologies and Features

- **Node.js Backend**: Backend server built using Node.js.
- **MySQL Database**: Utilizes Sequelize ORM to connect to a MySQL database. The database structure is automatically created on the first run.
- **Authentication**: Implements bcrypt for password hashing during user registration and token generation upon successful authentication. Tokens are used to access other endpoints in the system.

## Running the Project

This project relies on Node.js. Ensure you have Node.js installed on your machine.

To set up and run the project:

1. Navigate to the project directory.
2. Run `npm i` to install dependencies.
3. Run `npm run dev` to start the development server.

Please note that this backend is intended to support functionalities for user management and statistics retrieval for the WorleyFront application. 


