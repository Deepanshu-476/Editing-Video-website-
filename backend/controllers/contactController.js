const Contact = require('../models/Contact');
const { validationResult } = require('express-validator');

const submitContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ success: false, errors: errors.array() });
  const contact = await Contact.create(req.body);
  res.status(201).json({ success: true, message: 'Message submitted successfully', data: contact });
};
const getAllContacts = async (_req, res) => res.json({ success: true, data: await Contact.find().sort({ createdAt: -1 }) });
const getContactById = async (req, res) => res.json({ success: true, data: await Contact.findById(req.params.id) });
const updateContactStatus = async (req, res) => res.json({ success: true, data: await Contact.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true }) });
const deleteContact = async (req, res) => { await Contact.findByIdAndDelete(req.params.id); res.json({ success: true, message: 'Contact deleted' }); };
const getContactStats = async (_req, res) => {
  const total = await Contact.countDocuments();
  const byStatus = await Contact.aggregate([{ $group: { _id: '$status', count: { $sum: 1 } } }]);
  res.json({ success: true, data: { total, byStatus } });
};
module.exports = { submitContact, getAllContacts, getContactById, updateContactStatus, deleteContact, getContactStats };
