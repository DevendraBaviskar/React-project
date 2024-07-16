import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Home/Home";
import Contact from "./Components/Heading/Contact/Contact";
import About from "./Components/Heading/About/About";
import Project from "./Components/Heading/Project/Project";
import Params from "./User/Params";
import Data, { dataLoader } from "./Components/Data/Data";
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"project",
//         element:<Project/>
//       }
//     ]
//   }
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="project" element={<Project />} />
      <Route path="user/:username" element={<Params />} />
      <Route loader={dataLoader} path="apicall" element={<Data />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
