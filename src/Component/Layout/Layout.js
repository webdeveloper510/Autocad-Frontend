import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import SideBar from "../Sidebar/sidebar";

function Layout() {

  return (
    <div className="w-full flex">
      <div className="w-2/12 h-full	bg-gradient-to-r from-[#c850c0] to-[#4158d0] sidebar">
        <SideBar />
      </div>
      <div className="w-10/12 min-h-screen h-full bg-[#f0f2f5]">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
