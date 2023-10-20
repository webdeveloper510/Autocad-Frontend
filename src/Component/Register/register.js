import React, {useState} from "react";
import Input from "../Common/input";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API } from "../../config/Api";
import { toast } from "react-toastify";

function Register() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [EmailAddress, setEmailAddress] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate()



  const handleSignInUser=()=>{
    if (FirstName === "" && LastName === "" && EmailAddress === "" && Password===""){
      toast.error("Please enter in Fields !", {autoClose:1000})
    }
    else{
      const formData = new FormData();
      formData.append("firstname", FirstName);
      formData.append("lastname", LastName);
      formData.append("email", EmailAddress);
      formData.append("password", Password);
      axios.post(API.BASE_URL+"/register", formData)
      .then((response)=>{
        toast.success("User Registered SuccessFull!",{autoClose:1000});
        navigate("/dashboard");
      }).catch((error)=>{
        toast.error("Error Occured", {autoClose:1000});
      })
    }
  }


  return (
    <div>
      <div className=" bg-gradient-to-r from-[#c850c0] to-[#4158d0] h-[100vh] pt-12">
      <div className="grid grid-cols-12 gap-8 w-[960px] mx-auto bg-[#fff] p-6 rounded-lg origin-top-left-1/2-3/2 absolute top-[50%] left-[50%]">
        <div className="col-span-12">
          <div className=" mx-auto p-8">
            <p className="text-center text-2xl font-semibold my-8">Register Form</p>
            <form>
              <div className="grid grid-cols-2 gap-4">
                  <Input type="text" label="First Name" placeholder="" onChange={(e)=> setFirstName(e.target.value)} />
                  <Input type="text" label="Last Name" placeholder="" onChange={(e)=> setLastName(e.target.value)} />
                  <Input type="email" label="Email Address" placeholder="" onChange={(e)=> setEmailAddress(e.target.value)} />
                  <Input type="password" label="Password" placeholder="" onChange={(e)=> setPassword(e.target.value)} />
                    
              </div>
              <div className="text-center">
                  <button type="button" className="bg-[#57b846] mt-3 text-[#fff] py-3 px-12 text-lg mx-auto rounded-[25px]" onClick={handleSignInUser}>Sign Up</button>
              </div>
            </form>
            <div className="mt-8 flex justify-center">
              <p>Already have any account?</p>
              <Link to='/' className="text-[#57b846] ml-3">Sign In</Link>
             </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Register
