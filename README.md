### NOTE - Their is two different repositories for frontend and backend

### Installation Instructions

1. Navigate to the frontend directory:
```bash
cd frontend
```
2. Install frontend packages:
```bash
npm install
```
3. Navigate to the backend directory:
```bash
cd ../backend
```
4. Install backend packages:
```bash
npm install
```

### Configuration

1. Create a `.env` file inside the backend directory and add the following configuration variables:

```
MONGO_URI=Your_mongodb_URI
GMAIL_USERNAME=your_gmail_address 
GMAIL_PASSWORD=password_created_inside_App_Password_section_under_google_accounts_setting
PORT=8000
JWT_SECRET=a_random_secret_key_eg_thisisasecretkey
```

### Running the App

1. Start the backend server:
```bash
cd backend
nodemon server
```

2. Start the frontend server:
```bash
cd ../frontend
npm start
```

### Live Preview

Check the live preview [here](https://taskkk-managerrr.netlify.app/)
