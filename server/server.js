require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require('./routes/auth-routes/index')

// Create express app
const app = express();
const port = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI

app.use(cors({
    origin: process.env.CLIENT_URL || "*", // Allow requests from frontend
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));


app.use(express.json());

mongoose.connect(MONGO_URI).then(() => {
    console.log("MongoDB is Connected");
}).catch((e) => {
    console.log(e);
});

//routes configuration
app.use('/auth', authRoutes);

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({
        message: "Something went wrong"
    })
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});