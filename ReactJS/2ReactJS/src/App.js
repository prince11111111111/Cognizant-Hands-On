import React, { Component } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

class App extends Component {
  render() {
    return (
      <div style={{
        maxWidth: '800px',
        margin: '30px auto',
        padding: '20px',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
      }}>
        <h1 style={{
          textAlign: 'center',
          color: '#343a40',
          borderBottom: '2px solid #6c757d',
          paddingBottom: '15px',
          marginBottom: '30px'
        }}>
          Student Management Portal
        </h1>
        <Home />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
