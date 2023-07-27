const express = require('express');
const router = express.Router();

const accountSid = 'ACca4798b9d2878175188d54ab0a0ed06d';
const authToken = 'f6bccbfbbbc00486e7bbb214d51bf0ca';
const client = require('twilio')(accountSid, authToken);

var code = '';
function generateRandomCode() {
    code = '';
    const digits = '0123456789';
  
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      code += digits[randomIndex];
    }
  
    return code;
  }

router.get('/sendSMS',(req,res)=>{
    const code = generateRandomCode()
    client.messages
    .create({
        body: code,
        from: '+12186826963',
        to: '+919870732739'
    })
    .then(message => console.log(message.sid))
    .then(res.send(code))

})

router.get('/checkSMS/',(req,res)=>{
    if(req.query.otp===code)
        res.send({
            authentication:"true"
        })
    else
    res.send({
        authentication:"false"
    })
})

module.exports = router;