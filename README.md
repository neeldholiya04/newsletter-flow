
# Newsletter Subscription Renewal Flow Application

This project is a complete simulation of a newsletter subscription renewal process. It includes a backend service built with Node.js, Express, and MongoDB, as well as a frontend interface built with React and Tailwind CSS for visualizing the flow.

---

## Features

- **Frontend**:
  - Interactive visualization of the newsletter renewal flow.
  - Dynamic updates to the flow chart and logs.
  - Tailwind CSS for responsive and modern UI.

- **Backend**:
  - RESTful API for managing the flow process.
  - Handles reminders, status checks, and logs.
  - MongoDB integration for data persistence.
  - Centralized error handling middleware.

---

## Prerequisites

Ensure you have the following installed on your system:

1. Node.js (v14 or later)
2. npm (v6 or later)
3. MongoDB (Cloud/Local)

---

## Installation

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd newsletter-flow-backend
   ```

2. Install backend dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the following:

   ```env
   MONGO_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
   PORT=5000
   ```

4. Start the backend server:

   ```bash
   node index.js
   ```

   The backend server will run at `http://localhost:5000`.

---

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd newsletter-flow
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm start
   ```

   The frontend application will run at `http://localhost:3000`.

---

## Project Structure

```
.
├── backend
│   ├── config
│   │   └── db.js               # MongoDB connection setup
│   ├── middleware
│   │   └── errorHandler.js     # Centralized error handling
│   ├── routes
│   │   └── flowRoutes.js       # Routes for flow simulation
│   ├── .env                    # Environment variables
│   ├── server.js               # Entry point of the backend application
│   └── package.json            # Backend metadata and dependencies
├── frontend
│   ├── src
│   │   ├── components          # React components
│   │   ├── pages               # Application pages
│   │   ├── App.js              # Main React app file
│   │   ├── index.js            # React DOM entry point
│   ├── tailwind.config.js      # Tailwind CSS configuration
│   ├── package.json            # Frontend metadata and dependencies
│   └── public
│       └── index.html          # Main HTML file
├── README.md                   # Project documentation
```

---

## API Endpoints (Backend)

### Base URL: `/api/flow`

#### **1. Start Flow**
   - **GET** `/start`
   - Description: Initiates a new flow simulation and returns the logs.
   - Response Example:
     ```json
     {
       "logs": [
         "Step 1: Sending Initial Reminder",
         "Step 3: Sending Second Reminder",
         "Flow Complete: No Further Action"
       ]
     }
     ```
---

## Usage

1. **Start the Backend**:
   Run the backend server using the instructions in the "Backend Setup" section.

2. **Start the Frontend**:
   Run the frontend development server using the instructions in the "Frontend Setup" section.

3. **Open the Application**:
   Navigate to `http://localhost:3000` in your browser to view the application.

---

## Technologies Used

### Backend:
- Node.js
- Express
- MongoDB
- Mongoose

### Frontend:
- React
- Tailwind CSS

---

