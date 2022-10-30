
import React, { useState } from "react";
import { Link } from "react-router-dom"
import ButtonComponent from "../../components/Button";
import SignUpForm from "../../components/signUpForm";
import { ValidateMember } from "../../validation/validateMember";

const SignUp = () => {
  const [input, setInput] = useState({});
  const [error, setE] = useState({});

  // Input value change and store
  const onChangeHandler = (e) =>{
    setInput({...input, [`${e.target.name}`]: e.target.value })
  }
  // Change select value
  const handleChangeSelect = (e) =>{
    setInput({ ...input, country: e.target.value })
  }
  // Register function
  const handleRegister = () => {
    const memberArr = localStorage.getItem("memberArr");
    let memberRecord = [];
    let index;
    if (memberArr) {
      memberRecord = JSON.parse(memberArr);
      index = memberRecord.findIndex((item) => item.email === input.email);

    }
    if (index > -1) {
      alert("This email already exist! Please use different email id.");
      return;
    }
    const validate = ValidateMember(input);
    if (!validate.success) {
      setE(validate.error)
    } else {
      memberRecord = memberRecord.concat(input);
      localStorage.setItem('memberArr', JSON.stringify(memberRecord));

        setInput({
          username: '',
          pass: '',
          email: '',
          phone: '',
          country: '',
          street: '',
          city: '',
          state: '',
          zip: ''
        })
        setE(0)
    }
  }

  return (
    <div className="mt-9 w-1/2 m-auto">
      <form action="#" name="signUp" method="POST">
        <div className="overflow-hidden shadow sm:rounded-md">
          {/* Page Header */}
          <div className="bg-gray-50 px-4 py-3 sm:px-6 items-center flex">
            <h1 className="font-bold text-lg">Register to your account</h1>
          </div>
          <SignUpForm error={error} input={input} onChangeHandler={onChangeHandler} handleChangeSelect={handleChangeSelect} />
          <div className="bg-gray-50 px-4 py-3 sm:px-6 flex items-center">
            <span className="inline-block text-gray-400 text-sm">If you have already account. Please <Link to="/signIn" className="text-indigo-600 hover:text-indigo-500">Sign In</Link>.</span>
            <ButtonComponent type="button" handler={handleRegister} text="Register" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUp