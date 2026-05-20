const express = require('express');
const { body } = require('express-validator');
const { submitContact, getAllContacts, getContactById, updateContactStatus, deleteContact, getContactStats } = require('../controllers/contactController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();
const contactValidation = [body('name').notEmpty().isLength({ min: 2, max: 50 }), body('email').notEmpty().isEmail(), body('message').notEmpty().isLength({ max: 1000 })];
router.post('/submit', contactValidation, submitContact);
router.get('/all', protect, getAllContacts);
router.get('/stats', protect, getContactStats);
router.get('/:id', protect, getContactById);
router.put('/:id/status', protect, updateContactStatus);
router.delete('/:id', protect, deleteContact);
module.exports = router;
