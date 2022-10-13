import React from 'react'
import { FC, MouseEventHandler } from "react";
import '../../css/app.css'

const hamburgerButtonSytle = {
    width : '40px',
    height : '40px',
    backgroundColor : 'white',
}

export default function HamburgerButton(){
    return(
        <button 
            type="button"     
            className="btn-trigger" 
            onClick={MouseEventHandler}
            style={hamburgerButtonSytle}
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}
