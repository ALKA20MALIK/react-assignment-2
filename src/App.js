import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Validation/Char'


class App extends Component{

   state={input:'alka'}

   changeHandler=(event)=>{
    //inputValue=event.target.value.length
    this.setState({input:event.target.value})
  }
  render(){
    const CharList=this.state.input.split('').map(ch=>{
      return <Char character={ch}/>
    })
    return (
      <div className="App">
        <h1>calculate text length</h1>
        <input type='text' onChange={(event)=>this.changeHandler(event)} value={this.state.input}></input>
        <Validation length={this.state.input.length} />
        {CharList}
      </div>
    );
  }
  
}

export default App;
