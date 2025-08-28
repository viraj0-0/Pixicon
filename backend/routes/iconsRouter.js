const router = require('express').Router();
const IconModel = require('../models/IconModel');

// POST /api/icons
// Saves an icon to the database for the logged-in user
router.post('/', async (req, res) => {
    const { iconName, userId } = req.body;
    
    try {
        if (!userId) {
            return res.status(401).json({ message: 'Unauthorized: User ID is required' });
        }

        const existingIcon = await IconModel.findOne({ iconName, userId });
        if (existingIcon) {
            return res.status(200).json({ message: 'Icon already saved!' });
        }

        const newIcon = new IconModel({ iconName, userId });
        await newIcon.save();
        res.status(201).json({ message: 'Icon saved successfully!' });
    } catch (error) {
        console.error('Error saving icon:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// GET /api/icons/:userId
// Fetches all saved icons for a specific user
router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const featuredIcons = await IconModel.find({ userId });
        res.status(200).json(featuredIcons);
    } catch (error) {
        console.error('Error fetching icons:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// New Route: DELETE /api/icons/:userId/:iconName
// Deletes a specific icon for a user
router.delete('/:userId/:iconName', async (req, res) => {
    const { userId, iconName } = req.params;
    try {
        const result = await IconModel.deleteOne({ userId, iconName });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Icon not found.' });
        }
        res.status(200).json({ message: 'Icon removed successfully.' });
    } catch (error) {
        console.error('Error deleting icon:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;