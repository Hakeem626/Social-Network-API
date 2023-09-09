# Social Network API

This is a RESTful API for a social network. It allows users to perform various actions like creating, updating, and deleting thoughts, adding and removing friends, and more. This README provides an overview of the API and instructions for getting started.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, read, update, and delete thoughts.
- Add and remove friends from a user's friend list.
- Perform CRUD operations on user profiles.
- ...

## Getting Started

### Prerequisites

Before you can run the API, make sure you have the following installed:

- Node.js
- MongoDB (Make sure MongoDB server is running)

### Installation

1. Clone the repository:

   ```md
   git clone https://github.com/yourusername/Social-Network-API.git
   ```

2. Navigate to the project directory:

    ```md
    cd Social-Network-API
    ```

3. Start the server

    ```md
    npm start
    ```

## Usage

You can use tools like Postman or Insomnia to interact with the API endpoints. Make requests to the API routes to perform various actions.

## API Endpoints
Here are some of the API endpoints you can use:

- GET /api/users: Get all users.
- GET /api/users/:userId: Get a single user by ID.
- POST /api/users: Create a new user.
- PUT /api/users/:userId: Update a user by ID.
- DELETE /api/users/:userId: Delete a user by ID.
- POST /api/users/:userId/friends/:friendId: Add a friend.
- DELETE /api/users/:userId/friends/:friendId: Remove a friend.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

## License
This project is licensed under the MIT License.

## Video

https://drive.google.com/file/d/1_rCSlkxuNjv-iafLtb7mSH2wd5WHd0-p/view?usp=sharing