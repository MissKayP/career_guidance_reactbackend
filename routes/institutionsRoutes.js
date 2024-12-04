const express = require('express');
const { getAllInstitutions, createInstitution, deleteInstitution } = require('../controllers/institutionsController');
const router = express.Router();

router.get('/', getAllInstitutions);
router.post('/', createInstitution);
router.delete('/:id', deleteInstitution);

module.exports = router;
