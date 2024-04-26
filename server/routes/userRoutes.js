const express = require('express');
const userController = require('../controllers/userController');
const blobController = require('../controllers/blobController');
const taskController = require('../controllers/taskController');
const authMiddleware = require('../utils/authMiddleware');

const router = express.Router();

// Users
router.get('/', userController.getAllUsers);
router.post('/login', userController.login);
router.post('/signup', userController.signup);

router.use('/blobs', authMiddleware.authMiddleware);
router.use('/blobs/:blobName/tasks', authMiddleware.authMiddleware);

// Blobs
router.get('/blobs/', blobController.getAllBlobs);
router.get('/blobs/:blobName', blobController.getOneBlob);
router.post('/blobs/', blobController.addABlob);
router.delete('/blobs/:blobName', blobController.deleteABlob);

// Tasks
router.get('/blobs/:blobName/tasks', taskController.getAllTasks);
router.post('/blobs/:blobName/tasks', taskController.addATask);
router.delete('/blobs/:blobName/tasks/:taskId', taskController.deleteATask);

module.exports = router;