import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FcUpload } from "@react-icons/all-files/fc/FcUpload";
import  {RiPsychotherapyLine} from "@react-icons/all-files/ri/RiPsychotherapyLine"
import Modal from "../Common/modal";
import { AiOutlineCloseCircle } from "@react-icons/all-files/ai/AiOutlineCloseCircle";
import { AiOutlineArrowLeft } from "@react-icons/all-files/ai/AiOutlineArrowLeft";
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight";
import Input from "../Common/input"; 
import { FaEye } from "@react-icons/all-files/fa/FaEye";
import { API } from "../../config/Api";
import { toast } from "react-toastify";
function Dashboard() {
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const Token = localStorage.getItem("Token");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFileUpLoad, setIsFileUpLoad] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [UploadedFile , setUploadedFile] = useState('');
  const [StateUpdate , setStateUpdate] = useState(false);
  const [UserData , setUserData] = useState([]);

  const OpenFileUpload = ()=>{
    setIsFileUpLoad(true);
  }


  useEffect(()=>{
    axios.get(API.BASE_URL+"/getuserdetails")
    .then((response)=>{
      setUserData(response)
      StateUpdate(false);
    }).catch((error)=>{
      console.log('');
    });
  }, [UserData])



  const images = [
    'https://unsplash.it/640/425?image=30',
    'https://unsplash.it/640/425?image=40',
    'https://unsplash.it/640/425?image=50',
    'https://unsplash.it/640/425?image=50',
  ];

  const previous = () => {
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const forward = () => {
    if (currentIndex < images.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsFileUpLoad(false);
  };

  const handleUploadFile=()=>{
    if (UploadedFile === ""){
      toast.error("Please select a file!", {autoClose:1000})
    }
    else {
    const formData = new FormData()
    formData.append("stp_file", UploadedFile)
    axios.post(API.BASE_URL+"/upload", formData)
    .then((response)=>{
      toast.success("File uploaded successfully!" , {autoclose:1000});
      setStateUpdate(true);
      setIsFileUpLoad(false);

    }).catch((error)=>{
      toast.error("Error uploading file!" , {autoclose:1000});
      setIsFileUpLoad(false);

    })
  }
  };
  return (
    <div>
      <div className="p-4 bg-gradient-to-r from-[#c850c0] to-[#4158d0]">
        <Link to={"/dashboard"} className="text-white">
          Dashboard
        </Link>
      </div>

    

      <div className="px-8">
        <p className="py-4 text-3xl font-semibold">Welcome To Dashboard</p>

        <div>
          <div className="grid grid-cols-12 gap-4 mt-8 mb-6">
            <div className="md:col-span-4 col-span-12"  onClick={OpenFileUpload}>
               <div className=" bg-[#fff] rounded-[20px] p-4 shadow-lg	h-full">
                <div className="flex justify-between">
                  <div className="border-2 bg-[#36363c] md:mt-[-40px] py-5 text-center  w-[80px] rounded-[15px]" >
                   <FcUpload className="w-6 h-6 mx-auto text-[#ffff]" />
                  </div>
                  <div>
                    <p>Feed the Brain</p>
                  </div>
                </div>
                <div className="mt-4 mx-3 ">
                  <hr/>
                </div>
                <div className="py-4"></div>
               </div>
            </div>
            <div className="md:col-span-4 col-span-12">
               <div className=" bg-[#fff] rounded-[20px] p-4 shadow-lg h-full	">
                <div className="flex justify-between">
                  <div className="border-2 bg-[#429cef] md:mt-[-40px] py-5 text-center  w-[80px] rounded-[15px]">
                   <FaEye className="w-6 h-6 mx-auto text-[#ffff]" />
                  </div>
                  <div>
                    <p>Preview Pdf Images</p>
                  </div>
                </div>
                <div className="mt-4 mx-3 ">
                  <hr/>
                </div>
                <div className="text-left" style={{width: "50%", float: "left"}}>
                  <button  className="bg-[#57b05b] text-white py-2 px-5 mt-3 rounded-lg" type="button">Download PDF</button>
                </div>
                <div className="text-right">
                  <button onClick={openModal} className="bg-[#429cef] text-white py-2 px-5 mt-3 rounded-lg" type="button">Preview</button>
                </div>
               </div>
            </div>
          </div>
      {/* TABLE SECTION PART */}
            <section className="bg-[#429cef] py-20 lg:py-[10px]">
              <div className="container">
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full px-4">
                    <div className="max-w-full overflow-x-auto">
                      <table className="table-auto w-full">
                        <thead>
                          <tr className="bg-primary text-center">
                            <th className="w-1/6 min-w-screen text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent">
                              File name
                            </th>
                            
                            <th className="w-1/6 min-w-screen text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4">
                              Created At
                            </th>
                            <th className="w-1/6 min-w-screen text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-r border-transparent">
                              Download
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-[#E8E8E8]">
                              AutocadToPdf.pdf  
                            </td>
                            <td className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8]">
                              20:10:2023
                            </td>
                            <td className="text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-r border-[#E8E8E8]">
                              <a href="javascript:void(0)" className="border border-primary py-2 px-6 text-primary inline-block rounded hover:bg-primary hover:text-white">
                                Download
                              </a>
                            </td>
                          </tr>
                        
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </div>


  {/* MODEL CLASS SUBMIT FILE -------------------------------------------------> */}



        <Modal isOpen={isFileUpLoad} onClose={closeModal}>
        <button onClick={closeModal} className="absolute right-1 top-1">
          <AiOutlineCloseCircle className="w-8 h-8" />
        </button>
        <h2 className="text-2xl">Upload Your ".stp*" FILE</h2>
        <hr className="my-2" />
        {/* <form> */}
          <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
              <p className="selection:bg-fuchsia-300 selection:text-fuchsia-900"> So I started to walk into the water. I won't lie to you boys, I was
                  terrified. But I pressed on, and as I made my way past the breakers
                  a strange calm came over me. 
                </p>
            </div>
            <input type="file" class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" onChange={(e)=> setUploadedFile(e.target.files[0])}/>
          </div>
          <div className="text-center">
            <button className="bg-[#57b846] mt-3 text-[#fff] py-3 px-12 text-lg mx-auto rounded-[25px]" onClick={handleUploadFile}>
              Upload File
            </button>
          </div>
        {/* </form> */}
      </Modal>





{/* MODEL CLASS PREVIEW -------------------------------------------------> */}
       <Modal isOpen={isModalOpen} onClose={closeModal}>
        <button onClick={closeModal} className="absolute right-1 top-1">
          <AiOutlineCloseCircle className="w-8 h-8" />
        </button>
        <h2 className="text-2xl">Images From PDF</h2>
        <hr className="my-2" />
          <main className="grid min-h-[70vh] w-full place-content-center bg-gray-900">
            <div className="relative mx-auto max-w-2xl overflow-hidden rounded-md bg-gray-100 p-2 sm:p-4">
              <div className="absolute right-5 top-5 z-10 rounded-full bg-gray-600 px-2 text-center text-sm text-white">
                <span>{currentIndex}</span>/
                <span>{images.length}</span>
              </div>

              <button onClick={previous} className="absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md">
                <AiOutlineArrowLeft />
              </button>

              <button onClick={forward} className="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md">
                <AiOutlineArrowRight />
              </button>

              <div className="relative h-80" style={{ width: '30rem' }}>
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute top-0 ${currentIndex === index + 1 ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <img src={image} alt="image" className="rounded-sm" />
                  </div>
                ))}
              </div>
            </div>
          </main>
        {/* <form>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <Input label={"Name"} type="text" placeholder="Enter Name" />
            </div>
            <Input label={"Queue"} type="text" placeholder="Enter Queue" />
            <Input
              label={"Is Direct Allowed"}
              type="text"
              placeholder="Enter Is Direct Allowed"
            />
            <Input
              label={"Has Voicemail"}
              type="text"
              placeholder="Enter Has Voicemail"
            />
            <Input
              label={"Caller Id"}
              type="text"
              placeholder="Enter Caller Id"
            />
            <Input
              label={"Dt Updated"}
              type="text"
              placeholder="Enter Dt Updated"
            />
            <Input label={"Is Fax"} type="text" placeholder="Enter Is Fax" />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#57b846] mt-3 text-[#fff] py-3 px-12 text-lg mx-auto rounded-[25px]"
            >
              Update
            </button>
          </div>
        </form> */}
      </Modal>
      </div>
    </div>
  );
}

export default Dashboard;
