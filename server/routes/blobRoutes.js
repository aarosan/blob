const express = require('express');
const blobController = require('../controllers/blobController');

const router = express.Router();

// Blobs
router.get('/blobs', blobController.getAllBlobs);
router.get('/blobs/:blobName', blobController.getOneBlob);
router.post('/blobs', blobController.addABlob);
router.delete('/blobs/:blobName', blobController.deleteABlob);

// Tasks

module.exports = router;