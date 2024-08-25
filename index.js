const express = require('express');
const cors = require('cors');
const path = require('path');
const MongoDB = require('./db.js');

const app = express();

// Initialize MongoDB connection
MongoDB();

// Enable CORS for specific origin
app.use(cors({
    origin: 'http://localhost:5173', // Allow only this origin
    methods: 'GET,POST,PUT,DELETE',  // Allow specific HTTP methods
    credentials: true,               // If you need to send cookies or authorization headers
}));

// Serve static files from the dist directory
app.use(express.static(path.resolve(__dirname, "Cards_project", "dist")));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "Cards_project", "dist", "index.html"));
});

app.get("/foodData", (req, res) => {
    if (global.food_items) {
        res.json(global.food_items);
    } else {
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

// Start the server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
