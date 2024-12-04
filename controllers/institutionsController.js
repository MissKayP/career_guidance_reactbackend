const db = require('../config/db');

// Get all institutions
const getAllInstitutions = (req, res) => {
    const query = 'SELECT * FROM institutions';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// Create a new institution
const createInstitution = (req, res) => {
    const { name, location } = req.body;
    const query = 'INSERT INTO institutions (name, location) VALUES (?, ?)';
    db.query(query, [name, location], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Institution created', id: results.insertId });
    });
};

// Delete an institution
const deleteInstitution = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM institutions WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Institution deleted' });
    });
};

module.exports = { getAllInstitutions, createInstitution, deleteInstitution };
