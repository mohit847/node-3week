import React from 'react'
import './pizza.css'

let Pizza = (props) => {
    console.log("I am comoing from app.js", props);


    //condition? true: false
    // props.pizzaPlaces

    let pizzaPlacesList = props.pizzaPlaces.length ? props.pizzaPlaces.map((pizzaPlace) => {
        console.log(pizzaPlace);
        return (
            <div className='pizza' key={pizzaPlace.id}>
                <h1>{pizzaPlace.name.toUpperCase()}</h1>
                <p>{pizzaPlace.description}</p>
                <button onClick={ ()=> {props.deleteCard(pizzaPlace.id)}}>Delete Card</button>
            </div>
        )
    }) : (<p>No data available......</p>)

    return (
        <div>{pizzaPlacesList}</div>
    )
    //         <div className='pizza'>
    //             <h1>{props.brand.toUpperCase()}</h1>
    //             <p>{props.description}</p>
    //         </div>
    // )
}

export default Pizza;