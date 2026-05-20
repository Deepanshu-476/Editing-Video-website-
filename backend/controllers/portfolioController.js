const Portfolio = require('../models/Portfolio');
const { validationResult } = require('express-validator');

const getAllProjects = async (_req, res) => res.json({ success: true, data: await Portfolio.find().sort({ createdAt: -1 }) });
const getProjectById = async (req, res) => res.json({ success: true, data: await Portfolio.findById(req.params.id) });
const createProject = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ success: false, errors: errors.array() });
  res.status(201).json({ success: true, data: await Portfolio.create(req.body) });
};
const updateProject = async (req, res) => res.json({ success: true, data: await Portfolio.findByIdAndUpdate(req.params.id, req.body, { new: true }) });
const deleteProject = async (req, res) => { await Portfolio.findByIdAndDelete(req.params.id); res.json({ success: true, message: 'Project deleted' }); };
const getFeaturedProjects = async (_req, res) => res.json({ success: true, data: await Portfolio.find({ featured: true }) });
const getCategories = async (_req, res) => res.json({ success: true, data: await Portfolio.distinct('category') });
const bulkDeleteProjects = async (req, res) => { await Portfolio.deleteMany({ _id: { $in: req.body.ids || [] } }); res.json({ success: true, message: 'Projects deleted' }); };
module.exports = { getAllProjects, getProjectById, createProject, updateProject, deleteProject, getFeaturedProjects, getCategories, bulkDeleteProjects };
