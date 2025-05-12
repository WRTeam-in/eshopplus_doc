const express = require('express');
const app = express();
const firebaseRoutes = require('./firebase-route');

app.set('view engine', 'ejs');
app.use('/docs', firebaseRoutes);

app.listen(3000, () => {
    console.log('Documentation server running on port 3000');
});