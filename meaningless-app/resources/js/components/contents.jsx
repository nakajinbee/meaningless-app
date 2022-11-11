import React from 'react'
import MudaEdit from '../pages/mudaEdit'
import MudaHome from '../pages/mudaHome'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Contents(){
    return(
        <>
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<MudaHome />} />
                    <Route path={'/muda/regist'} element={<MudaEdit />} />
               </Routes>
            </BrowserRouter>
         </div>
        </>
    )
}