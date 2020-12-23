import React, {Component} from 'react';
import './App.css';
import data from './data'
import Person from './Person'

class App extends Component {
  constructor(){
    super()
    this.state = {
      data,
      i:0
    }
    this.inc = this.inc.bind(this)
    this.dec = this.dec.bind(this)
  }

inc(){
  if(this.state.i === this.state.data.length -1) return;
  this.setState({i:this.state.i +1})
}

dec(){
  if(this.state.i === 0) return;
  this.setState({i : this.state.i - 1})
}

  render (){
    const {data, i} = this.state
    return (
      <div className="App">
        <Person person={data[i]} 
        i={this.state.i}
        data={this.state.data}
        inc={this.inc} 
        dec={this.dec}/>
      </div>
    )
  }
}

export default App;