import React, { useState } from 'react'
import Input from './Input';

export default function Loginpage() {

    const [username, setUserName] = useState("");
    const [pass, setPass] = useState("");

  return (
    <div className="lightDark ">
      <form className="my-5">
        <Input label={"Username"} value={username} set={setUserName} type={"text"} length={20}/>
        <Input label={"Password"} value={pass} set={setPass} type={"password"} length={15}/>
        <div className="row justify-content-evenly">
          <button type="button" class="btn btn-primary w-25">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}
