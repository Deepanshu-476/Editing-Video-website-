const express = require('express');
const { body } = require('express-validator');
const { login, getMe, updateProfile, changePassword, logout, setupAdmin } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();
const loginValidation = [body('email').notEmpty().isEmail(), body('password').notEmpty().isLength({ min: 6 })];
const passwordValidation = [body('currentPassword').notEmpty(), body('newPassword').notEmpty().isLength({ min: 6 })];

router.post('/login', loginValidation, login);
router.post('/setup', setupAdmin);
router.get('/me', protect, getMe);
router.put('/me', protect, updateProfile);
router.put('/change-password', protect, passwordValidation, changePassword);
router.post('/logout', protect, logout);

module.exports = router;
