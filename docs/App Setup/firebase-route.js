const express = require('express');
const router = express.Router();
const { fetchFirebaseContent } = require('./firebase-loader');

router.get('/firebase-settings', async (req, res) => {
    try {
        const content = await fetchFirebaseContent();
        res.render('firebase-settings', { content });
    } catch (error) {
        res.status(500).send('Error loading Firebase documentation: ' + error);
    }
});

module.exports = router;