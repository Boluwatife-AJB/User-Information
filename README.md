# Node.JS User Information Project

This Node.js project is a user information management system designed to collect and manage user details such as first name, last name, date of birth, email, address, and username. It offers a straightforward and secure solution for handling user data, making it well-suited for applications that involve user registration or profile management.

## Features

- User Input Handling: Collect and validate user inputs for first name, last name, date of birth, email, address, and username.
- Data Storage: Utilizes a secure database or storage solution to persistently store and retrieve user information.
- Express Server: Implements an Express.js server to handle HTTP requests and manage the flow of user data.
- Validation and Sanitization: Incorporates input validation and sanitization techniques to ensure data integrity and security.

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. Clone the Repository:

   ```bash
   git clone https://github.com/Boluwatife-AJB/User-Information.git
   ```

2. Install the dependencies

   ```bash
   cd user-information
   npm install
   ```

3. Set up Environment Variables in the `config.env` file in the root directory.

   ```bash
    NODE_ENV=development
    PORT=5000
    DATABASE=<your-mongodb-connection-string>
    DATABASE_PASSWORD=<your-cluster-password>
    DATABASE_LOCAL=<mongodb://localhost:27017/<name-of-your-local-database>
   ```

4. Run the application
   - For Development
     ```bash
     npm run start
     ```
   - For Production
     ```bash
     npm run start:prod
     ```

## Contribution

Contributions are welcome! If you have suggestions, feature requests, or find any issues, please open an issue or create a pull request.

<!-- Write the license and acknowledgement -->
