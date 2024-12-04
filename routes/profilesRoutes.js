const express = require('express');
const { getAllProfiles, getProfileById, createProfile, updateProfile } = require('../controllers/profilesController');
const router = express.Router();

router.get('/', getAllProfiles);
router.get('/:id', getProfileById);
router.post('/', createProfile);
router.put('/:id', updateProfile);

module.exports = router;
