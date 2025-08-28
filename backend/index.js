// backend/index.js
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;
require('./models/dbConnection');
const authRouter = require('./routes/authRouter');
const aiRouter = require('./routes/aiRouter'); // Import the new router
const iconsRouter = require('./routes/iconsRouter'); // New router
const cors = require('cors');

app.use(cors());
app.use(express.json()); // Add this line to parse JSON request bodies

app.get('/', (req, res) => {
    res.send('hello world');
});

app.use('/auth', authRouter);
app.use('/api/icons', iconsRouter); // New route
app.use('/api/ai', aiRouter); // The new AI route

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});