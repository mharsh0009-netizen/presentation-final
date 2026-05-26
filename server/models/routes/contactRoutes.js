const express = require("express");

const router = express.Router();

const Contact = require("../models/Contact");

router.post("/contact", async (req, res) => {

    try {

        const newContact = new Contact(req.body);

        await newContact.save();

        res.status(201).json({
            message: "Message Saved Successfully",
        });

    } catch (error) {

        res.status(500).json({
            error: error.message,
        });

    }

});

module.exports = router;