import React from 'react'

let Pizza = (props) =>{
    console.log("I am comoing from app.js",props)
    return(
        <div className='pizza'>
            <h1>{props.brand.toUpperCase()}</h1>
            <p>{props.description}</p>
        </div>
)}

export default Pizza