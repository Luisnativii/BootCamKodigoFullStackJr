// routes/name.routes.js
const express = require('express');
const router = express.Router();
const nameController = require('../controllers/name.controller');

router.post('/add', nameController.addName);
router.get('/total', nameController.getTotalCount);

module.exports = router;
