import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,

  RouterProvider,
} from "react-router-dom";
import Body from './Body';
import Home from './Home/Home';
import CardDetails from './Home/Card/CardDetails';
import Donate from './Donation/Donate';
import Statistics from './Statistics/Statistics';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Body></Body>,
    children: [
      {
        path: "/",
        element: <Home></Home> ,
        loader: ()=> fetch("../data.json")
      },
      {
        path: "/Donation",
        element: <Donate></Donate>,
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics> ,
        loader: ()=> fetch("../data.json")
       
      },
      {
        path: "/CardDetails/:id",
        element: <CardDetails></CardDetails> ,
        loader: ()=> fetch("../data.json")
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
