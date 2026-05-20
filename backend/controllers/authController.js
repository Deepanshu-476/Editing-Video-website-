const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE || '7d' });

const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ success: false, errors: errors.array() });

    const { email, password } = req.body;
    const admin = await Admin.findOne({ email }).select('+password');
    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    if (!admin.isActive) return res.status(401).json({ success: false, message: 'Account is deactivated' });

    admin.lastLogin = Date.now();
    await admin.save();
    const token = generateToken(admin._id);

    return res.status(200).json({ success: true, data: { token, user: { id: admin._id, name: admin.name, email: admin.email, role: admin.role, avatar: admin.avatar } } });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Login failed. Please try again.' });
  }
};
const getMe = async (req, res) => res.status(200).json({ success: true, data: await Admin.findById(req.user.id).select('-password') });
const updateProfile = async (req, res) => {
  const admin = await Admin.findById(req.user.id);
  if (!admin) return res.status(404).json({ success: false, message: 'Admin not found' });
  ['name', 'email', 'avatar'].forEach((f) => { if (req.body[f]) admin[f] = req.body[f]; });
  await admin.save();
  return res.status(200).json({ success: true, message: 'Profile updated successfully', data: admin });
};
const changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const admin = await Admin.findById(req.user.id).select('+password');
  if (!admin) return res.status(404).json({ success: false, message: 'Admin not found' });
  if (!(await admin.comparePassword(currentPassword))) return res.status(401).json({ success: false, message: 'Current password is incorrect' });
  admin.password = newPassword;
  await admin.save();
  return res.status(200).json({ success: true, message: 'Password changed successfully' });
};
const logout = async (_req, res) => res.status(200).json({ success: true, message: 'Logged out successfully' });
const setupAdmin = async (_req, res) => {
  const adminExists = await Admin.findOne({ email: process.env.ADMIN_EMAIL });
  if (adminExists) return res.status(400).json({ success: false, message: 'Admin already exists' });
  const admin = await Admin.create({ name: 'Super Admin', email: process.env.ADMIN_EMAIL, password: process.env.ADMIN_PASSWORD, role: 'superadmin' });
  return res.status(201).json({ success: true, message: 'Admin created successfully', data: { email: admin.email, name: admin.name } });
};

module.exports = { login, getMe, updateProfile, changePassword, logout, setupAdmin };
