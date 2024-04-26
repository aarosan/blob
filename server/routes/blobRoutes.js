const express = require('express');
const blobController = require('../controllers/blobController');
const taskController = require('../controllers/taskController');

const router = express.Router();

// Blobs
router.get('/blobs', blobController.getAllBlobs);
router.get('/blobs/:blobName', blobController.getOneBlob);
router.post('/blobs', blobController.addABlob);
router.delete('/blobs/:blobName', blobController.deleteABlob);

// Tasks
router.get('/blobs/:blobName/tasks', taskController.getAllTasks);
router.post('/blobs/:blobName/tasks', taskController.addATask);
router.delete('/blobs/:blobName/tasks/:taskId', taskController.deleteATask);

module.exports = router;