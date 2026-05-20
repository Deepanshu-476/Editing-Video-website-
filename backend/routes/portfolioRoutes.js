const express = require('express');
const { body } = require('express-validator');
const { getAllProjects, getProjectById, createProject, updateProject, deleteProject, getFeaturedProjects, getCategories, bulkDeleteProjects } = require('../controllers/portfolioController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();
const projectValidation = [body('title').notEmpty().isLength({ max: 100 }), body('category').notEmpty(), body('description').notEmpty().isLength({ max: 500 }), body('videoUrl').notEmpty().isURL()];
router.get('/', getAllProjects);
router.get('/featured', getFeaturedProjects);
router.get('/categories', getCategories);
router.get('/:id', getProjectById);
router.post('/', protect, projectValidation, createProject);
router.put('/:id', protect, updateProject);
router.delete('/:id', protect, deleteProject);
router.post('/bulk-delete', protect, bulkDeleteProjects);
module.exports = router;
