const express = require('express');
const blobController = require('../controllers/blobController');
const taskController = require('../controllers/taskController');

const router = express.Router();

// Blobs
router.get('/', blobController.getAllBlobs);
router.get('/:blobName', blobController.getOneBlob);
router.post('/', blobController.addABlob);
router.delete('/:blobName', blobController.deleteABlob);

// Tasks
router.get('/:blobName/tasks', taskController.getAllTasks);
router.post('/:blobName/tasks', taskController.addATask);
router.delete('/:blobName/tasks/:taskId', taskController.deleteATask);

module.exports = router;