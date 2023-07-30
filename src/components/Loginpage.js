import React, { useEffect, useState } from 'react'
import Input from './Input';

export default function Loginpage() {

    const [username, setUserName] = useState({value:"",validationMsg:"Username is Required"});
    const [pass, setPass] = useState({value:"",validationMsg:"Password is Required"});
    const [logState, setlogState] = useState(null);

    const checkUser = async()=>{
      if(await checkValidation()){
        setlogState("loading")
        const response = await fetch('http://localhost:8080/bmt/user/getUser', {
          method: 'POST',
          body: JSON.stringify({
            "username":username,
            "password":pass,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        const parsedData = await  response.json();
        if(parsedData.message === "You have been Logged In"){
          setlogState("true")
        }
        else{
          setlogState(null);
          if(parsedData.error === "Username Does Not Exist"){
            setUserName({value:username.value,validationMsg:parsedData.error})
          }
          else{
            setPass({value:pass.value,validationMsg:parsedData.error})
          }
        }
      }
    }
    const checkValidation = ()=>{
      const divs = document.querySelectorAll('.inputBox');
      var flag = true;
        [].forEach.call(divs, function(div) {
            if(div.value == ""){
              div.classList.add('invalid')
              document.getElementById(`feedback_${div.id}`).style.display = 'block'
              flag = false;
            }
            else{
              document.getElementById(`feedback_${div.id}`).style.display = 'hidden'
              div.classList.remove('invalid')
            }
        });
        return flag;
    }

    useEffect(() => {
      if(username.value !="")
        checkValidation();
    }, [username, pass]);
  

  return (
    (logState===null ) ? (<div className="lightDark ">
    <form className="my-5">
      <Input
        label={"Username"}
        value={username.value}
        set={setUserName}
        type={"text"}
        length={20}
        validationMessage={username.validationMsg}
      />
      <Input
        label={"Password"}
        value={pass.value}
        set={setPass}
        type={"password"}
        length={15}
        validationMessage={pass.validationMsg}
      />
      <div className="row justify-content-evenly">
        <button 
          type="button" 
          class="btn btn-primary w-25"
          onClick={checkUser}
          >
          Log In
        </button>
      </div>
    </form>
  </div>) : (
      (logState === "loading") ? (<div className="lightDark d-flex justify-content-center">
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>) : (<div className='my-5 '>You have been Logged In</div>)
  )
  );
}
