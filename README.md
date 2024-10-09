# Railway Management System

This project is a simplified railway management system that allows users to:
- Register and log in to the platform.
- Check available trains between two stations.
- Book a seat on a train if seats are available.
- View booking details.

The project ensures race condition handling while booking seats, with only one user being able to book a seat at any given moment, even under heavy traffic. The admin can add new trains to the system, while users can check seat availability and book seats. All bookings and sensitive operations are protected by JWT-based authentication.

## Features
1. **User Registration**: Users can register to access the system.
2. **Login**: Registered users can log in and receive a JWT token for authorization.
3. **Train Management**: Admin can add trains, and users can check seat availability.
4. **Booking**: Users can book seats and check their booking history.
5. **Race Condition Handling**: Ensures that seat bookings are processed sequentially.

## Tech Stack
- **Node.js** with **Express.js** (Server)
- **JWT** for authentication
- **In-memory storage** (No database used)

---

## Instructions to Start the Project

### Prerequisites
- **Node.js** (v12 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Aditya2063a/WorkIndia_Assignment.git
   cd WorkIndia_Assignment
   
2. **Start the project**

   ```bash
   npm install
   npm run dev


### Dependencies and Libraries:
- `dotenv`: ^16.4.5
- `express`: ^4.21.0
- `jsonwebtoken`: ^9.0.2
- `async-mutex`: ^0.5.0
- `nodemon`: ^3.1.7

### Dependencies

The project requires the following npm packages:

- **express**: A minimal and flexible Node.js web application framework.
  - Install with: `npm install express`

- **jsonwebtoken**: Used to sign, verify, and decode JSON Web Tokens (JWT) for user authentication.
  - Install with: `npm install jsonwebtoken`

- **async-mutex**: A library to implement mutex locks for handling race conditions during seat bookings.
  - Install with: `npm install async-mutex`

- **nodemon** (dev): A development tool that automatically restarts the server when file changes are detected.
  - Install with: `npm install nodemon`

---

### Available API

- **POST /api/register**: Register a new user.
  - Request body: `{ "username": "string", "password": "string" }`
  - Response: Success message and user data.

- **POST /api/login**: Log in and get a JWT token.
  - Request body: `{ "username": "string", "password": "string" }`
  - Response: JWT token for authentication.

- **POST /api/book_seat**: Book a seat on a train (JWT required).
  - Request header: `Authorization: Bearer <JWT token>`
  - Request body: `{ "train_id": "number" }`
  - Response: Booking confirmation and seat details.

- **POST /api/add_train**: Add a new train to the system (Admin only, API key required).
  - Request header: `x-api-key: <Admin API Key>`
  - Request body: `{ "train_id": "number", "source": "string", "destination": "string", "total_seats": "number" }`
  - Response: Success message and train details.

- **GET /api/trains**: Get a list of all available trains.
  - Response: List of trains with details including seat availability.

- **GET /api/bookings**: View all bookings made by the logged-in user (JWT required).
  - Request header: `Authorization: Bearer <JWT token>`
  - Response: List of bookings with booking details.

---

## Testing the API with Postman

You can test all the endpoints using **Postman** by following these steps:

1. **Install Postman**: If you don't have Postman installed, you can download it from [Postman Download](https://www.postman.com/downloads/).

2. **Testing Endpoints**:

   - **Register a new user**:
     - Method: `POST`
     - URL: `http://localhost:3000/api/register`
     - Body (JSON):
       ```json
       {
         "username": "your_username",
         "password": "your_password"
       }
       ```
     - Expected Response: A success message and user data.

   - **Login**:
     - Method: `POST`
     - URL: `http://localhost:3000/api/login`
     - Body (JSON):
       ```json
       {
         "username": "your_username",
         "password": "your_password"
       }
       ```
     - Expected Response: A JWT token for authentication.
     - **Save the token** for subsequent API requests.

   - **Add a new train (Admin only)**:
     - Method: `POST`
     - URL: `http://localhost:3000/api/add_train`
     - Headers:
       - `x-api-key`: Your Admin API key
     - Body (JSON):
       ```json
       {
         "train_id": 1,
         "source": "Station A",
         "destination": "Station B",
         "total_seats": 100
       }
       ```
     - Expected Response: A success message with train details.

   - **Check available trains**:
     - Method: `GET`
     - URL: `http://localhost:3000/api/trains`
     - Expected Response: A list of available trains.

   - **Book a seat on a train**:
     - Method: `POST`
     - URL: `http://localhost:3000/api/book_seat`
     - Headers:
       - `Authorization`: Bearer `<Your JWT token>`
     - Body (JSON):
       ```json
       {
         "train_id": 1
       }
       ```
     - Expected Response: A booking confirmation with seat details.

   - **View all bookings (for logged-in users)**:
     - Method: `GET`
     - URL: `http://localhost:3000/api/bookings`
     - Headers:
       - `Authorization`: Bearer `<Your JWT token>`
     - Expected Response: A list of all bookings made by the user.

3. **Make sure the server is running**:
   - Start the server by running `node index.js` in your terminal before making any requests via Postman.
   - All API requests should point to `http://localhost:3000`.

By using Postman, you can interact with all the API endpoints, verify their functionality, and ensure the JWT-based authentication and race condition handling work as expected.
