const mysql = require('mysql2');

// Create a connection to the database using environment variables
const db = mysql.createConnection({
  host: process.env.DB_HOST,      // Database host (e.g., localhost)
  user: process.env.DB_USER,      // Database username
  password: process.env.DB_PASSWORD,  // Database password
  database: process.env.DB_NAME,      // Database name
});

// Establish the connection to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    process.exit(1); // Exit if the DB connection fails
  }
  console.log('Connected to MySQL');
});

// Export the connection to be used in other files
module.exports = db;
