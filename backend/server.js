require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;
const url = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

// CORS configuration with credentials
app.use(cors({
    origin: 'https://jayasurya-portfolio-new.vercel.app/',
    methods: ['GET', 'POST'],
    credentials: true
}));

// Handle preflight requests
app.options('*', cors());

app.use(express.json());

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post('/contactForm', async (req, res) => {
    const { nameField, emailField, message, mobileField } = req.body; // Corrected to req.body

    if (!nameField) {
        return res.status(400).json({ message: 'I’d love to know your name. Could you please provide it?' });
    }
    if (!emailField) {
        return res.status(400).json({ message: 'Your email address is important to me. Please enter it.' });
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailField)) {
        return res.status(400).json({ message: 'Your email seems a bit off. Could you double-check it for me?' });
    }
    if (!message) {
        return res.status(400).json({ message: 'I value your thoughts. Could you please leave a message?' });
    }

    try {
        // Mail options for sending to the client
        const mailOptionsClient = {
            from: process.env.EMAIL_USER,
            to: emailField,
            subject: 'Thank You for Reaching Out! 🌟',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 10px;">
                    <div style="text-align: center; padding-bottom: 20px;">
                        <img src="https://yourwebsite.com/logo.png" alt="Your Logo" style="width: 100px; margin-bottom: 10px;">
                        <h2 style="color: #4CAF50;">Hello ${nameField},</h2>
                    </div>
                    <p style="font-size: 16px; color: #333;">Thank you for getting in touch! I’m excited to connect with you and discuss how we can work together to create something amazing.</p>
                    <p style="font-size: 16px; color: #333;">Here’s a quick summary of your message:</p>
                    <div style="background-color: #f9f9f9; padding: 15px; margin: 20px 0; border-radius: 5px;">
                        <p><strong>Your Email:</strong> ${emailField}</p>
                        <p><strong>Your Message:</strong> ${message}</p>
                        <p><strong>Your Mobile:</strong> ${mobileField}</p>
                    </div>
                    <p style="font-size: 16px; color: #333;">I will get back to you shortly to discuss further. Meanwhile, feel free to check out some of my latest projects on my <a href="https://jayasurya-portfolio-new.vercel.app" style="color: #4CAF50; text-decoration: none;">portfolio website</a>.</p>
                    <p style="font-size: 16px; color: #333;">Looking forward to our collaboration!</p>
                    <div style="text-align: center; padding-top: 20px;">
                        <p style="font-size: 16px; color: #333;">Best Regards,</p>
                        <p style="font-size: 16px; color: #4CAF50;"><strong>Jaya Surya</strong></p>
                        <p style="font-size: 14px; color: #999;">Front-End Developer</p>
                    </div>
                </div>
            `
        };

        // Mail options for sending to yourself
        const mailOptionsSelf = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Your email address
            subject: 'New Contact Form Submission Received',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 10px;">
                    <div style="text-align: center; padding-bottom: 20px;">
                        <h2 style="color: #4CAF50;">New Contact Form Submission</h2>
                    </div>
                    <p style="font-size: 16px; color: #333;">You have received a new message from your portfolio website:</p>
                    <div style="background-color: #f9f9f9; padding: 15px; margin: 20px 0; border-radius: 5px;">
                        <p><strong>Name:</strong> ${nameField}</p>
                        <p><strong>Email:</strong> ${emailField}</p>
                        <p><strong>Mobile:</strong> ${mobileField}</p>
                        <p><strong>Message:</strong></p>
                        <p style="font-size: 16px; color: #333;">${message}</p>
                    </div>
                    <p style="font-size: 16px; color: #333;">Be sure to follow up with them soon!</p>
                    <div style="text-align: center; padding-top: 20px;">
                        <p style="font-size: 14px; color: #999;">Portfolio Website Notification</p>
                    </div>
                </div>
            `
        };

        // Send the email to the client
        await transporter.sendMail(mailOptionsClient);

        // Send the email to yourself
        await transporter.sendMail(mailOptionsSelf);

        res.status(200).json({ message: 'Form submitted successfully' });
    } catch (err) {
        console.error('Error sending email:', err);
        res.status(500).json({ message: 'Error sending email' });
    }
});


// Basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
