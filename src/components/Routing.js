import React from 'react'
import { BrowserRouter,Navigate,Route,Routes } from 'react-router-dom';
import Task1 from './task1'
import FunctionLifecycle from './functionLifecycle';
import Form from './form';
const Routing = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Task1 />}></Route>
                <Route path="/function/:id/:details" element={<FunctionLifecycle />}></Route>
                <Route path="/form" element={<Form />}></Route>
                {/* <Route path="*" element={<Navigate to={"/function/:id/:details"}></Navigate>}></Route> */}
                <Route path="*" element={<h1 style={{color:"red",textAlign:"center",fontSize:"50px"}}>Not Found !</h1>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing
