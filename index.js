import express from "express";
import cors from "cors";
import connectToMongo from "./config/db.js";
import userRoutes from './routes/user.js';
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT || 8080;
dotenv.config({ path: './.env' })
// Connect to MongoDB
connectToMongo();

// Enable CORS
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// User Routes
app.use('/api/v1', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
