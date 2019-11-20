import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() extends Component {
  render() {	
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
	<h1 className="App-title">Welcome You</h1>  
      </header>
      <p className="App-intro">
	  I was changed on feature branch.
	  </p>
    </div>
  );
  }
}

export default App;
