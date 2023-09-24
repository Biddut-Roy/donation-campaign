import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  json,
  RouterProvider,
} from "react-router-dom";
import Body from './Body';
import Home from './Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Body></Body>,
    children: [
      {
        path: "/",
        element: <Home></Home> ,
        loader: ()=> fetch("./data.json")
      },
      {
        path: "/Donation",
        element:  <h2>ulu</h2>,
      },
      {
        path: "/Statistics",
        element: <h1>mar fiya</h1> ,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
