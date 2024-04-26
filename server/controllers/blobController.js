const Blob = require('../models/Blob');

exports.getAllBlobs = async (req, res) => {
    try {
        const loggedInUserId = req.user.id;
        const blobs = await Blob.find({ user: loggedInUserId});

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

        const newBlob = newBlob({ name, color, user: loggedInUserId, tasks });

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

        const blob = await Blob.findOne({ name: blobName, user: loggedInUserId });

        if (!blob) {
            return res.status(404).json({ message: 'Blob not found' });
        }

        await Task.deleteMany({ _id: { $in: blob.tasks } });

        await blob.delete();

        const user = await User.findById(loggedInUserId);

        if (user) {
            const index = user.blobs.indexOf(blob_id);
            if (index !== -1) {
                user.blobs.splice(index, 1);
                await user.save();
            }
        }

        return res.status(200).json({ message: 'Blob and associated tasks successfully deleted'});
    } catch (error) {
        console.error('Error deleting Blob');
        return res.status(500).json({ message: 'Internal server error'});
    }
};