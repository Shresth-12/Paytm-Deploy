Paytm User App
==============

A feature-rich Paytm user application that allows users to perform transactions, view their wallets, and manage their accounts with a seamless interface.

Features
--------

*   User registration and login system.
    
*   Wallet management (view balance, add money, etc.).
    
*   Transaction history and details.
    
*   Seamless UI/UX for easy navigation.
   
   
Tech Stack
----------

*   **Frontend**:  Next.js 
    
*   **Backend**: Node.js, Express.js
    
*   **Database**: PostgreSQL
    
*   **Authentication**:NEXT-AUTH
    
    

Prerequisites
-------------

Before you begin, ensure you have the following installed:

*   **Node.js** (v14+)
    
*   **npm** (Node Package Manager) or **yarn**
    
*   **PostgreSQL**
    
*   **Git**
    

Installation and Setup
----------------------

Follow these steps to set up and run the project locally:

### 1\. Clone the Repository
git clone https://github.com//.git

### 2\. Install Dependencies
npm install   `

### 3\. Set Up Environment Variables

#### For apps/user-app

Create a .env file in the apps/user-app directory and add the following variables:
JWT_SECRET=your-JWT_SECRET
NEXTAUTH_URL=url(for ex:http://localhost:3001)

#### For packages/db

Create a .env file in the packages/db directory and add the following variables:
 MONGO_URI=your-mongodb-connection-string  
POSTGRES_URI=your-postgresql-connection-string   `

> Replace the placeholders with your actual credentials.

### 4\. Start the Server
 npm start   `

### 5\. Run in Development Mode (Optional)

If you want to run in development mode with live-reloading:
 npm run dev   `

Usage
-----

1.  http://localhost:5000
    
2.  Use the application features:
    
    *   Register as a new user.
        
    *   Add money to your wallet.
        
    *   View transaction history.
        


Contact
-------

If you have any questions or need support, feel free to reach out:

*   **Email**:beingshresth4@gmail.com
    
*   **GitHub**: Shresth-12(https://github.com/Shresth-12)
