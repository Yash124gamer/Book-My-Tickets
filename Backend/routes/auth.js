const express = require('express');
const router = express.Router();

const accountSid = 'ACca4798b9d2878175188d54ab0a0ed06d';
const authToken = 'f6bccbfbbbc00486e7bbb214d51bf0ca';
const client = require('twilio')(accountSid, authToken);
var OTP = null;

router.get('/sendSMS',(req,res)=>{
    client.messages
    .create({
        body: '7098',
        from: '+12186826963',
        to: '+919870732739'
    })
    .then(message => console.log(message.sid))
    .then(res.send("Done"))

})

module.exports = router;