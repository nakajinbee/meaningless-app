import React from 'react'
import Login from '../pages/login'
import MudaEdit from '../pages/mudaEdit'
import MudaHome from '../pages/mudaHome'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Contents(){
    return(
        <>
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Login />} />
                    <Route path={'/home'} element={<MudaHome />} />
                    <Route path={'/muda/'} element={<MudaEdit />} />
                    <Route path={'/muda/:id'} element={<MudaEdit />} />
               </Routes>
            </BrowserRouter>
         </div>
        </>
    )
}