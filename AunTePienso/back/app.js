// app.js
require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/database.config');
const nameRoutes = require('./routes/name.routes');

// Conectar a MongoDB
connectDB();

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/names', nameRoutes);

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
