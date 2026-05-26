const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST route to create a new contact
router.post("/contact", async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Create new contact
        const newContact = new Contact({
            name,
            email,
            subject,
            message,
        });

        // Save to database
        await newContact.save();
        res.status(201).json({ message: "Contact saved successfully", data: newContact });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET route to retrieve all contacts (optional)
router.get("/contacts", async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
