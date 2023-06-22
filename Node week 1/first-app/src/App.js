
import { Component } from 'react';
import Pizza from './Pizza.js';
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
  render() {
    let dynamicName = 'React is mind blowing';
    let brand = "PizzaHut";
    let description = "Best pizza in town!"

    return (
      <div>
        <h1>
          {dynamicName}
        </h1>
        <Pizza brand={brand} description={description}></Pizza>
      </div>
    )
  }
}

export default App;
