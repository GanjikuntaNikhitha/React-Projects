import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css'
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services'

function App() {
  return (
// now just we are writing all the components in app.js to display in webpage
    <div className="App">
      <Header></Header>
      <About></About>
      <Contact></Contact>
      <Services></Services>
    </div>
  )
}

  export default App;