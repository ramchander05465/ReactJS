import React, { Component } from 'react';
import ContextAPI from './context-api'
import FirstComponent from './firstComponent'
class App extends Component {
  render() {
    return (
      <ContextAPI>
      <div className="App">
        welcome
        <FirstComponent />
      </div>
      </ContextAPI>
    );
  }
}

export default App;
