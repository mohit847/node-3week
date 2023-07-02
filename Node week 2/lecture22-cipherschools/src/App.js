
import { Component } from 'react';
import Pizza from './components/Pizza.js';
// function App() {
//   return (
//     <div className="App">
//       return(
//         <h1>reacgt</h1>
//       )
//     </div>
//   );
// }

//class based components

class App extends Component {

  state = {
    // pizzaPlaces : []
    dynamicName: "Pizza Hunter",
    // brand: "Pizza",
    // description: "best pizza in town"
    pizzaPlaces: [
      { name: "Pizza Hut", description: "Best Pizza", id: 1 },
      { name: "Dominoes", description: "Best Pizza in town", id: 2 },
      { name: "Papa johns", description: "Pizza place", id: 3 },
      { name: "Ovenbricks", description: "authentic pizza", id: 4 },
      { name: "Ovenbricks", description: "authentic pizza", id: 5 },
      { name: "Ovenbricks", description: "authentic pizza", id: 6 },
    ]
  }


  deleteCard = (id) => {
    console.log(id); 
    
    let pizzaPlaces = this.state.pizzaPlaces.filter((pizzaPlace) => {
      return pizzaPlace.id !== id
    })
    this.setState({
      pizzaPlaces: pizzaPlaces
    })
    };

render() {
  // let dynamicName = 'React is mind blowing';
  // let brand = "PizzaHut";
  // let description = "Best pizza in town!"
  return (
    <div>
      <h1>
        {this.state.dynamicName}
      </h1>

      {/* <Pizza brand={this.state.pizzaPlaces[0].name} description={this.state.pizzaPlaces[0].description}></Pizza> */}
      <Pizza pizzaPlaces={this.state.pizzaPlaces} deleteCard={this.deleteCard}></Pizza>
      {/* <Pizza></Pizza> */}
    </div>
  )
}
}

export default App;
