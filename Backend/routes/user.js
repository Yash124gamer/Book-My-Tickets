const express = require('express');
const router = express.Router();
const User = require('../models/Users')

router.post('/save',async (req, res) => {
    try {
      const user = new User(req.body);
      const savedUser = await user.save();
      res.json({ message: 'User data saved successfully.', user: savedUser });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  });

module.exports = router;