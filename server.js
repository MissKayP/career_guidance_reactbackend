const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const instituteRoutes = require('./routes/instituteRoutes');
const studentRoutes = require('./routes/studentRoutes');
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes'); // Import userRoutes
const profilesRoutes = require('./routes/profilesRoutes');  // Import profiles routes
const institutionsRoutes = require('./routes/institutionsRoutes');  // Import institutions routes
const facultiesRoutes = require('./routes/facultiesRoutes');  // Import faculties routes
const coursesRoutes = require('./routes/coursesRoutes');  // Import courses routes
const applicationsRoutes = require('./routes/applicationsRoutes');  // Import applications routes
const admissionsRoutes = require('./routes/admissionsRoutes');  // Import admissions routes
const authRoutes = require('./routes/authRoutes');
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',  // Frontend URL for CORS
  credentials: true,               // Allow credentials (cookies)
}));
app.use(express.json());
app.use(cookieParser());

// Session Middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'yourSecretKey',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,        // Ensures cookies are not accessible via JavaScript
      secure: false,         // Set to true if using HTTPS
      maxAge: 3600000,       // Session expiration in milliseconds (1 hour)
    },
  })
);

// API Routes
app.use('/api/institutes', instituteRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/users', userRoutes); // Register the user routes
app.use('/api/profiles', profilesRoutes);  // Register the profiles routes
app.use('/api/institutions', institutionsRoutes);  // Register the institutions routes
app.use('/api/faculties', facultiesRoutes);  // Register the faculties routes
app.use('/api/courses', coursesRoutes);  // Register the courses routes
app.use('/api/applications', applicationsRoutes);  // Register the applications routes
app.use('/api/admissions', admissionsRoutes);  // Register the admissions routes

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// Start the server
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Error handling for server issues
server.on('error', (err) => {
  console.error('Error:', err);
  process.exit(1);  // Exit if the server fails to start
});
