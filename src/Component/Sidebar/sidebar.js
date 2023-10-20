import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "../../assets/image/logo.png";

function SideBar({ handler, data, tabs, setTabs, setActiveTab }) {
  const [active, setActive] = useState("");
  const [expandedItem, setExpandedItem] = useState(null); // Store the expanded main object
  const location = useLocation();
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const navigate = useNavigate();

  // const handleLogout = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://v01.kerne.org:500/pbx/pbx001/webapi/?module=apiLogout",
  //       {
  //         method: "GET",
  //       }
  //     );

  //     if (response.ok) {
  //       setIsLoggedOut(true);
  //       toast.success("User is logged out!");
  //       console.log(response);
  //       navigate("/");
  //       // You can also perform any other actions here upon successful logout
  //     } else {
  //       // Handle errors if the logout request was not successful
  //       console.error("Logout failed");
  //     }
  //   } catch (error) {
  //     console.error("An error occurred while logging out:", error);
  //   }
  // };

  const Lists = [
    {
      name: "Dashboard",
      url: "/dashboard",
    },
    {
      name: "Profile",
      url: "/Profile",
    },
  ];

  // console.log(Lists)

  useEffect(() => {
    // Find the active URL and set it in the state
    const activeItem = Lists.find((bar) =>
      location.pathname.startsWith(bar.url)
    );
    if (activeItem) {
      setActive(activeItem.url);
    }
  }, [location.pathname]);

  const handleLogoutUser=()=>{
    localStorage.removeItem("Token");
    toast.success("User Logout!", {autoClose:1000})
    setTimeout(()=>{
      navigate("/")
      window.location.reload();
    }, 1000);
  }

  return (
    <div className="h-full">
      <div className="bg-gradient-to-r from-[#c850c0] to-[#4158d0] min-h-[100vh] h-full sidebars">
        {/* <img src={Logo} className="mx-auto py-4" alt="logo" /> */}
        <div className="shadow-sm min-h-[93vh] h-full">
          <div className="w-[280px] mx-auto pt-8">
            <ul>
              {Lists.map((bar, index) => (
                <li key={index}>
                  <Link
                    to={bar.url}
                    className={`flex cursor-pointer rounded-[25px] p-1 mb-3 ${
                      active === bar.url || active === bar.name
                        ? "bg-[#FFF] text-[#000]"
                        : " text-white"
                    }`}
                  >
                    <span className="self-center text-left w-full pl-12">
                      {bar.name}
                    </span>
                  </Link>
                  {/* Render sub-items if the item is expanded */}
                </li>
              ))}
              <li 
              // onClick={handleLogout}
               className="cursor-pointer">
                <button className="flex cursor-pointer rounded-[25px] p-1 mb-3  text-white">
                <span className="self-center text-left w-full pl-12 text-white ml-1"  onClick={handleLogoutUser}>
                  Logout
                </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
