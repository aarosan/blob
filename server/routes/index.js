const router = require('express').Router();
const userRoutes = require('../userRoutes');
const blobRoutes = require('../blobRoutes');

router.use('/users', userRoutes);
router.use('/blobs', blobRoutes);

router.use((req, res) => {
    return res.send('Wrong route!');
});

module.exports = router;