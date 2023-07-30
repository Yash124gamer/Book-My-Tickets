const express = require('express');
const router = express.Router();
const User = require('../models/Users')
const { body , validationResult } = require('express-validator')
var bcrypt = require('bcryptjs');

router.post('/save',[
          body('name','The Name Should Not be Greater Than 15 words').isLength({max:15}),
          body('email','Please Enter A Valid Email ID').isEmail(),
          body('number','Please Enter a Valid Number').isNumeric().isLength({max:10,min:10}),
],async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty())
    return res.status(400).json({error:errors})
  const { email , username , number ,password} = req.body;
  let user = await User.findOne({username});
    if(user)
      return res.status(400).json({error:"Username Already Exists"})
    let e = await User.findOne({email})
    if(e)
      return res.status(400).json({error:"Email Already Exists"});
    let num = await User.findOne({number})
    if(num)
      return res.status(400).json({error:"Number Already Exists"});
    try {
      var salt = await  bcrypt.genSalt(10);
      req.body.password = await  bcrypt.hash(req.body.password, salt);
      const user = new User(req.body);
      const savedUser = await user.save();
      res.json({ message: 'User data saved successfully.', user: savedUser });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  });

router.post('/getUser',async(req,res)=>{
  const {username , password} = req.body;
  try {
    let user = await User.findOne({username});
    if(!user)
      return res.json({error:"Username Does Not Exist"})
    let pass = await bcrypt.compare(password,user.password)
    if(!pass)
      return res.json({error:"You Have Entered a Wrong Password"});
    return res.json({message:"You have been Logged In"})
  } catch (error) {
    res.status(500).json({ message: error });
  } 
})


module.exports = router;