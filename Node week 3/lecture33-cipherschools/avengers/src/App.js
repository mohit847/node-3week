import Rect, { Comments } from 'react';
import './App.css';
import axios from 'axios'

class App extends Comments {

  state = [];
  handleClick = () => {
    axios.get('http://localhost:3001/api/avengers').then(data =>{
      console.log(avengers)
      this.setState({
        avengers: avengers.data
      })
    }).catch(error =>{
      console.log(error);
    })
  }
  render() {
    return (
      <><h1>Avengers List</h1>
      <button onClick={this.handleClick}>Get data</button></>
    )
  }
}

export default App;
