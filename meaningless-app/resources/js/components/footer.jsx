import React from 'react'

const fotterStyle = {
    backgroundColor : 'gainsboro',
    width: '100%',
    height: '40px',
    position: 'fixed',
    bottom: '0'
}

const fotterTextStyle = {
    color:'gray',
    textAlign: 'center',
    marginTop: '7px'
}

export default function Footer(){
    return(
        <>
         <footer style={fotterStyle}>
            <div style={fotterTextStyle}>無駄を作ってみました。</div>
         </footer>
        </>
    )
}