const express = require('express');
const router = express.Router();
const { getAllInstitutes, addInstitute, deleteInstitute } = require('../controllers/instituteController');

// Public routes
router.get('/', getAllInstitutes);
router.post('/', addInstitute);
router.delete('/:id', deleteInstitute);

module.exports = router;
