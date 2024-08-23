const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const Form = require('./models/formModel'); // Import the Form model

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Test route
app.get('/test', (req, res) => {
    res.send('Test route is working');
});

// API endpoint for form submission
app.post('/submit-form', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        const formEntry = new Form({ name, email, message });
        await formEntry.save();
        console.log('Form data saved to the database:', formEntry);
        res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
        console.error('Error saving form data:', error.message);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});

// Catch-all route for undefined endpoints
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
