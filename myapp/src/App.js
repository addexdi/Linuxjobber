import React from 'react';
import './App.css';
import Devs from './Devs';
class App extends React.Component {
  
  render() {
    return(
      <div className='App'>
        <h1>My first React App!</h1>
        <Devs name="Adam" age="21" skill="react"/>
        <Devs name="Aliyat" age="16" skill="Python"/>
      </div>
    )
  }
}

export default App;
