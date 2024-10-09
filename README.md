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
   git clone https://github.com/your-repo/railway-management-system.git
   cd railway-management-system
   
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

### Available Endpoints

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

