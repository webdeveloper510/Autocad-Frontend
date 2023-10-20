import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Image from '../../assets/image/836.jpg';
import Background from '../../assets/image/bg-01.jpg';
import Input from '../Common/input';
import { toast } from 'react-toastify';
function Profile() {
  const [newPassword, setNewPassword]= useState("")
  const [ConfirmPassword, setConfirmPassword]= useState("")
  // const [ConfirmPassword, setConfirmPassword]= useState("")


  const handleChangePassword=()=>{
    if (newPassword === "" && ConfirmPassword === ""){
      toast.error("Please Fill the fields first !", {autoClose:1000})
    }
  }
  return (
    <div>
      <div className="p-4 bg-gradient-to-r from-[#c850c0] to-[#4158d0]">
        <Link to={"/dashboard"} className="text-white">
          Home
        </Link> <span className='text-white'> / </span>
        <Link to={"/Profile"} className="text-white">
          Profile
        </Link>
      </div>

      <div className='px-8 mt-5'>
        <div>
          <img src={Background} className='h-[350px] w-full rounded-lg' alt='Cover Image' />
        </div>
        <div className=' px-4 mt-[-100px] '>
          <div className=' bg-[#fff] rounded-[20px] z-[100] relative p-4 shadow-lg'>
            <div className='flex '>
              <div>
              <img class="w-32 h-32 rounded-full mx-auto" src={Image} alt="Profile picture" />
              </div>
              <div className='self-center pl-6'>
                <p className='text-lg font-semibold'>Testing Admin Test123</p>
                <p> admin@gmail.com </p>
              </div>
            </div>

            <div className='grid grid-cols-12 gap-4'>
              <div className='col-span-8'>
                <div className='py-4'>
                  <p className='text-xl mb-4 font-semibold'>Profile Information</p>
                  <p>Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>
                </div>
                <div className='mt-10'>
                  <h6 className='font-semibold'>Name : Admin Test</h6>
                  <h6 className='font-semibold'>Email : admintest@gmail.com</h6>
                </div>
              </div>

              {/* Change Password Section  */}
              <div className='col-span-4'>
                <h2 className="text-2xl mb-5" >Change Password</h2>
                  <div className="grid grid-cols-2 gap-4">

                    <div className="col-span-2">
                      <Input type="password" placeholder="New Password" onChange={(e)=> setNewPassword(e.target.value)}/>
                    </div>
                    <div className="col-span-2">
                      <Input type="password" placeholder="Confirm Password" onChange={(e)=> setConfirmPassword(e.target.value)}/>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      className="bg-[#57b846] mt-3 text-[#fff] py-3 px-12 text-lg mx-auto rounded-[25px]" onClick={handleChangePassword}
                    >
                      Update
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
