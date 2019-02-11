import React, { Component } from 'react';
import Boxes from './components/boxes';
import './App.css';
import TryConext from './hoc/try-context';

class App extends Component {
    state ={
      hs:true
    }

    clickHandler=()=>{
      this.setState(re=>{return {hs:!re.hs}})
    }

  render() {
    return (
      <div className="App">
      <TryConext.Provider value={{hs:this.state.hs,click:this.clickHandler}}>
        <Boxes/>
      </TryConext.Provider>
      </div>
    );
  }
}

export default App;
