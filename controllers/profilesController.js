const db = require('../config/db');

// Get all profiles
const getAllProfiles = (req, res) => {
    const query = 'SELECT * FROM profiles';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// Get a single profile by ID
const getProfileById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM profiles WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ error: 'Profile not found' });
        res.json(results[0]);
    });
};

// Create a new profile
const createProfile = (req, res) => {
    const { name, email, role } = req.body;
    const query = 'INSERT INTO profiles (name, email, role) VALUES (?, ?, ?)';
    db.query(query, [name, email, role], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Profile created', id: results.insertId });
    });
};

// Update a profile
const updateProfile = (req, res) => {
    const { id } = req.params;
    const { name, email, role } = req.body;
    const query = 'UPDATE profiles SET name = ?, email = ?, role = ? WHERE id = ?';
    db.query(query, [name, email, role, id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Profile updated' });
    });
};

module.exports = { getAllProfiles, getProfileById, createProfile, updateProfile };
