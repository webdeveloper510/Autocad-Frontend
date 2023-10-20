import React, { useState } from "react";
import Input from "../Common/input";
import logins from "../../assets/image/img-01.webp";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate  } from 'react-router-dom';
import { API } from "../../config/Api";
import { toast } from "react-toastify";
function Login() {
  const [EmailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate ();

  const handleLoginForm=()=>{
    if (EmailAddress == "" && password == "" ){
      toast.error("Please enter Email and Password", {autoClose:1000});
    }
    else {
      const formData = new FormData();
      formData.append("email", EmailAddress);
      formData.append("password", password);
      axios.post(API.BASE_URL+"/login", formData)
      .then((response)=>{
        localStorage.setItem("Token", response)
        toast.success("Login SuccessFull!",{autoClose:1000});
        navigate("/dashboard");
      }).catch((error)=>{
        toast.error("Error Occured", {autoClose:1000});
      })
    }
  }
  return (
    <div className=" bg-gradient-to-r from-[#c850c0] to-[#4158d0] min-h-[100vh] h-full  pt-12">
      <div className="grid grid-cols-12 gap-8 w-[960px] mx-auto bg-[#fff] p-6 rounded-lg origin-top-left-1/2-3/2 absolute top-[50%] left-[50%]">
        <div className="col-span-12 md:col-span-6">
          <img src='http://zp04.kerne.org/webpanel/static/media/img-01.4ed7df3a303c99050d13.webp' alt="login page" className="mx-auto my-12" />
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className=" mx-auto p-8">
            <p className="text-center text-2xl font-semibold my-8">
              Login Form
            </p>
            <form>
              <div className="grid grid-cols-1 gap-4">
                <Input
                  type="email"
                  label="Email"
                  name="Email"
                  onChange={(e) => setEmailAddress(e.target.value)}
                  placeholder=""
                />
                <Input
                  type="password"
                  label="Password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=""
                />
              </div>
              <div className="text-end">
                <Link to={"/"}>Forgot Password ? </Link>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#57b846] mt-3 text-[#fff] py-3 px-12 text-lg mx-auto rounded-[25px]"
                >
                  <Link onClick={handleLoginForm}>Sign In </Link>
                </button>
              </div>
            </form>
             <div className="mt-8 flex">
              <p>Don’t have any account?</p>
              <Link to='/register' className="text-[#57b846] ml-3">Sign Up</Link>
             </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
