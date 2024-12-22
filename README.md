# Guestly Web App - README

Welcome to the **Guestly Web App**, a platform where restaurants and bars can review customers just like customers review them. This app is designed to create a more balanced feedback ecosystem, rewarding great behavior and helping improve the dining experience for all.

---

## Features

1. **Customer Reviews**: Restaurants and bars can rate customers based on their behavior.
2. **Reward System**: High-scoring customers can enjoy benefits like discounts or free items.
3. **Data Privacy**: Secure handling of user data through authentication and encryption.
4. **Responsive Design**: Optimized for use on desktop and mobile devices.

---

## Tech Stack

### Frontend:
- React
- Tailwind CSS

### Backend:
- Node.js
- Express.js

### Database:
- Firebase Firestore (or any preferred database)

---

## Installation and Setup

### Prerequisites
- Node.js and npm installed
- Firebase project configured (if using Firestore)

### Frontend
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Backend
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```

### Environment Variables
Create a `.env` file in both the `frontend` and `backend` directories.

#### **Frontend**
```env
REACT_APP_API_URL=http://localhost:3000/api
```

#### **Backend**
```env
PORT=3000
```

---

## API Endpoints

### Auth
- `POST /api/auth/login`: Log in a user
- `POST /api/auth/register`: Register a user

### Users
- `GET /api/users`: Fetch all users

### Ratings
- `GET /api/ratings`: Fetch all customer ratings

---

## Database Schema

### Users Collection
| Field   | Type   | Description                      |
|---------|--------|----------------------------------|
| id      | string | Unique identifier for the user  |
| name    | string | User's name                     |
| email   | string | User's email address            |
| role    | string | Either `customer` or `business` |

### Ratings Collection
| Field       | Type   | Description                          |
|-------------|--------|--------------------------------------|
| id          | string | Unique identifier for the rating    |
| customerId  | string | Reference to the user being rated   |
| businessId  | string | Reference to the business rating    |
| score       | number | Rating score (1–5)                 |
| comment     | string | Optional comment from the business |

---

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push your changes and create a pull request.

---

## Roadmap

1. Add advanced filtering and search for customer reviews.
2. Implement analytics dashboards for businesses.
3. Extend to mobile apps (iOS and Android).
4. Introduce gamification to reward consistent high scores.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Happy reviewing! 🎉
