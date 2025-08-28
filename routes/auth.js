// routes/auth.js
import express from 'express';
const router = express.Router();
import bcrypt from 'bcrypt';
import db from '../db.js';
export default router;

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password)
    return res.status(400).json({ msg: "All fields are required" });

  try {
    const hash = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)";
    db.query(sql, [username, email, hash], (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(409).json({ msg: "Email or username already taken" });
        }
        return res.status(500).json({ msg: "Database error", error: err });
      }

      res.status(201).json({ msg: "User registered successfully" });
    });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});


