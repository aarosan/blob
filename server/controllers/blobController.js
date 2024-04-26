const Blob = require('../models/Blob');
const User = require('../models/User');

exports.getAllBlobs = async (req, res) => {
    try {
        const loggedInUserId = req.user.id;
        const blobs = await Blob.find({ user: loggedInUserId});

        console.log(loggedInUserId, blobs);

        return res.status(200).json({ blobs });
    } catch (error) {
        console.error('Error fetching blobs:', error);
        return res.status(500).json({ message: 'Internal server error'})
    }
};

exports.getOneBlob = async (req, res) => {
    try {
        const blobName = req.params.blobName;
        const loggedInUserId = req.user.id;
        
        const blob = await Blob.findOne({ name: blobName, user: loggedInUserId });

        if (!blob) {
            return res.status(404).json({ message: 'Blob not found' });
        }

        return res.status(200).json({ blob });
    } catch (error) {
        console.error('Error fetching blob:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

exports.addABlob = async (req, res) => {
    try {
        const  { name, color, tasks } = req.body;
        const loggedInUserId = req.user.id;

        const newBlob = Blob({ name, color, user: loggedInUserId, tasks });

        await newBlob.save();

        return res.status(200).json({ message: 'Blob successfully created:', blob: newBlob });
    } catch (error) {
        console.error('Error adding blob:', error);
        return res.status(500).json({ message: 'Internal server error'});
    }
};

exports.deleteABlob = async (req, res) => {
    try {
        const blobName = req.params.blobName;
        const loggedInUserId = req.user.id;
        console.log(blobName);
        console.log(loggedInUserId);

        console.log('Before blob delete')

        const deletedBlob = await Blob.findOneAndDelete({ name: blobName, user: loggedInUserId });
        console.log(deletedBlob);

        if (!deletedBlob) {
            return res.status(404).json({ message: 'Blob not found' });
        }

        console.log('After blob delete')

        return res.status(200).json({ message: 'Blob and associated tasks successfully deleted'});
    } catch (error) {
        console.error('Error deleting Blob');
        return res.status(500).json({ message: 'Internal server error'});
    }
};