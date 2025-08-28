import express from 'express'
import path from 'path'
import router from './routes/router.js'
import { fileURLToPath } from 'url';
const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3000

import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';

dotenv.config();
app.use(express.json()); // Parse JSON requests

// Routes
app.use('/api/auth', authRoutes);


app.use(express.static(path.join(__dirname, 'public')))

// app.get('/' , (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'signup.html'))
// })

app.use('/', router)

app.listen(PORT, (req,res) => {
    console.log(`Server is running at http://localhost:${PORT}`)
})