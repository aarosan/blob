const Blob = require('../models/Blob');

exports.getAllTasks = async (req, res) => {
    try {
        const blobName = req.params.blobName;
        const blob = await Blob.findOne({ name: blobName });

        if (!blob) {
            return res.status(404).json({ message: 'Blob not found' });
        }

        const tasks = blob.tasks;

        return res.status(200).json({ tasks });
    } catch (error) {
        console.error('Error fetching tasks:', error);
        return res.status(500).json({ message: 'Internal server error'});
    }
};

exports.addATask = async (req, res) => {
    try {
        const { taskName, date } = req.body;
        const blobName = req.params.blobName;

        const blob = await Blob.findOne({ name: blobName });

        if (!blob) {
            return res.status(404).json({ message: 'Blob not found' });
        }

        blob.tasks.push({ name: taskName, date });

        await blob.save();

        return res.status(200).json({ message: 'Task added successfully', blob });
    } catch (error) {
        console.error('Error adding tasks:', error);
        return res.status(500).json({ message: 'Internal server error'});
    }
};

exports.deleteATask = async (req, res) => {
    try {
        const { blobName, taskId } = req.params;
        
        const blob = await Blob.findOne({ name: blobName });

        if (!blob) {
            return res.status(404).json({ message: 'Blob not found' });
        }
        const taskIndex = blob.tasks.findIndex(task => task._id.toString() === taskId);

        if (taskIndex === -1) {
          return res.status(404).json({ message: 'Task not found in blob' });
        }
    
        blob.tasks.splice(taskIndex, 1);
    
        await blob.save();
    
        return res.status(200).json({ message: 'Task deleted successfully', blob });
        
      } catch (error) {
        console.error('Error deleting task from blob:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }
};