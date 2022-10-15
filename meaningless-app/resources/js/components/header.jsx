import React from 'react'
import HamburgerButton from './hamburgerButton'

const headerTextStyle = {
    display : 'inline-block',
    marginLeft : '50px',
    fontSize : '35px'
}

const headerStyle = {
    height : '60px',
    display : 'flex'
}


export default function Header(){

    return(
        <>
            <div style={headerStyle}>
                <div style={headerTextStyle}>La MUDA</div>
            </div>
        </>
    )
}
