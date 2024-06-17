import React from "react";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./componensts/layer/RootLayout";
import Home from "./componensts/page/Home";
import About from "./componensts/page/About";
import Contact from "./componensts/page/Contact";
import Services from "./componensts/page/Services";
import Team from "./componensts/page/Team";
import Chef from "./componensts/page/Chef";





const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout/>}
      >
        <Route index element={<Home/>} ></Route>
        <Route path="/about-us" element={<About/>} ></Route>
        <Route path="/contact-us" element={<Contact/>} ></Route>
        <Route path="/our-services" element={<Services/>} ></Route>
        <Route path="/our-team" element={<Team/>} ></Route>
        <Route path="/chef" element={<Chef/>} ></Route>
        <Route path="/chef-details" element={<Chef/>} ></Route>   
        {/* eita team er vitore */}
        

      </Route>
    )
  );
  return (
   <>
     <RouterProvider router={router} />
   </>
  )
}

export default App