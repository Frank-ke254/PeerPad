import express from 'express'
const router = express.Router()
export default router;
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


router.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'signin.html'))
})

router.post('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'signup.html'))
})
