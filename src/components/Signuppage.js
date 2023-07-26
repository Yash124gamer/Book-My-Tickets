import React, { useState } from 'react'
import Input from './Input';

export default function Loginpage() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

  return (
    <div className="lightDark ">
      <form className="my-5">
        <Input label={"Name"} value={name} set={setName} type={"text"} length={"20"}/>
        <Input label={"Email"} value={email} set={setEmail} type={"email"}/>
        <Input label={"Number"} value={number} set={setNumber} type={"number"} length={"10"}/>
        <div className="row justify-content-evenly">
          <button type="button" class="btn btn-primary w-25 ">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
