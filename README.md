# HotelStays

[Live Link](https://hotelstays.onrender.com/)

This is a MERN stack project with separate API and client components for managing hotel stays. Follow the instructions below to set up and run the project locally.

## Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [MongoDB](https://www.mongodb.com/) (you can use a local instance or create a free cloud instance on MongoDB Atlas)

## Project Structure

```hotelStays/
│
├── api/         # Backend (Node.js + Express)
│   ├── .env     # Environment variables (including MongoDB URI and PORT)
│   └── ...      # Other backend-related files
│
└── client/      # Frontend (React)
    └── ...      # Other frontend-related files
 ```
Setup Instructions:

Step 1: Clone the repository

```git clone https://github.com/donanhnguyen/hotelStays.git```
```cd hotelStays```

Step 2: Install dependencies
Install dependencies for both the api and client folders.

# Navigate to the api folder and install backend dependencies
```cd api```
```npm install```

# Navigate to the client folder and install frontend dependencies
```cd ../client```
```npm install```

Step 3: Set up MongoDB
You can either use a local MongoDB instance or create a cloud-based database using MongoDB Atlas.

Using MongoDB Atlas (Cloud Database)
Sign up for MongoDB Atlas and create a new project.
Create a new cluster and follow the prompts to set up your cluster.
Once your cluster is ready, click "Connect" and choose "Connect your application".
Copy the connection string provided (e.g., mongodb+srv://<username>:<password>@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority).
Replace <username> and <password> with your MongoDB Atlas credentials, and replace myFirstDatabase with your database name.

Step 4: Create .env file
In the api folder, create a .env file to store environment variables.

```cd ../api```
```touch .env```

Add the following variables to the .env file:

```MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/hotelStays?retryWrites=true&w=majority```
```PORT=8800```
Make sure to replace <username>, <password>, and the database name in the MONGO_URI as appropriate.

Step 5: Run the app
Now, you need to run both the backend (api) and frontend (client) simultaneously.

Start the Backend (API)

```cd api```
```npm start```
This will run the backend server on http://localhost:8800.

Start the Frontend (Client)
Open a new terminal window or tab, then run:

```cd client```
```npm start```
This will run the React frontend on http://localhost:3000.

Step 6: Access the Application
Once both the frontend and backend are running, you can open the application in your browser at:

http://localhost:3000

Additional Scripts
Backend (API): The backend runs on http://localhost:8800 by default.
Frontend (Client): The React app runs on http://localhost:3000.

To stop the servers, press Ctrl + C in the terminal where the app is running.
