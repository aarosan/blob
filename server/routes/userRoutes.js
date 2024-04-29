const express = require('express');
const userController = require('../controllers/userController');
const blobController = require('../controllers/blobController');
const taskController = require('../controllers/taskController');
const {authMiddleware} = require('../utils/authMiddleware');

const router = express.Router();

// Users
router.get('/', userController.getAllUsers);
router.post('/login', authMiddleware, userController.login);
router.post('/signup', userController.signup);

// Blobs
router.get('/blobs/', authMiddleware, blobController.getAllBlobs);
router.get('/blobs/:blobName', authMiddleware, blobController.getOneBlob);
router.post('/blobs/', authMiddleware, blobController.addABlob);
router.delete('/blobs/:blobName', authMiddleware, blobController.deleteABlob);

// Tasks
router.get('/blobs/:blobName/tasks', authMiddleware, taskController.getAllTasks);
router.post('/blobs/:blobName/tasks', authMiddleware, taskController.addATask);
router.delete('/blobs/:blobName/tasks/:taskId', authMiddleware, taskController.deleteATask);

module.exports = router;