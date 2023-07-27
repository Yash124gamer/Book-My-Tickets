import React, { useState } from 'react'
import Input from './Input';

export default function Loginpage() {

    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [sms,setSms] = useState(false);

    const sendMsg = async()=>{
          const url = `http://192.168.246.229:8080/bmt/auth/sendSMS`;
          const response = await fetch(url);
          setSms(true)
        }
    const checkSMS = async()=>{
      const url = `http://192.168.246.229:8080/bmt/auth/checkSMS/?otp=${otp}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if(data.authentication==="true"){
        document.querySelector('.verify').classList.add('d-none')
        document.querySelector('.continue').classList.remove('d-none')
      }

    }

  return (
    sms ? (
            <div className="lightDark ">
            <form className="my-5">
              <Input label={"OTP-"} value={otp} set={setOtp} type={"number"} length={"4"}/>
              <div className="row justify-content-evenly">
                <button type="button" className="btn btn-primary w-25" onClick={checkSMS}>
                  Verify
                </button>
              </div>
            </form>
          </div>
    ) : 
    (
          <div className="lightDark ">
          <form className="my-5">
            <Input label={"Name"} value={name} set={setName} type={"text"} length={"20"}/>
            <Input label={"Email"} value={email} set={setEmail} type={"email"}/>
            <Input label={"Number"} value={number} set={setNumber} type={"number"} length={"10"}/>
            <Input label={"Username"} value={username} set={setUsername} type={"text"} length={"15"}/>
            <Input label={"Password"} value={pass} set={setPass} type={"password"} length={"15"}/>
            <div className="row justify-content-evenly">
              <button type="button" className=" verify btn btn-primary w-25" onClick={sendMsg}>
                Sign Up
              </button>
              <button type="button" className="continue btn btn-primary w-25 d-none" >
                Continue
              </button>
            </div>
          </form>
        </div>
    )
  );
}
