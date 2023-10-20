import React from 'react';
import Login from './Component/Login/login';
import Register from './Component/Register/register';
import Dashboard from './Component/Pages/dashboard';
import Layout from './Component/Layout/Layout';
import Profile from './Component/Pages/profile';


const Token = localStorage.getItem('Token');
let routes;
if (Token) {

  routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, path: '/dashboard', element: <Dashboard /> },
        { path: '/Profile', element: <Profile /> },
      ],
    },
  ];
} else {

  routes = [
    {
      path: '/',
      children: [
        { index: true, element: <Login /> },
        { path: '/register', element: <Register /> },
      ],
    },
  ];
}

export default routes;
