import React, { Component } from 'react';
import '../styles/App.css';
import Footer from './Footer.js';
import Form from './Form.js';
import Header from './Header.js';
import NavBar from './NavBar.js';
import Section from './Section.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Section />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
