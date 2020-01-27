import React, { Component } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import ProductList from './ProductList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <h1 style={{textAlign:'center'}}>React Tutorial</h1>
          <ProductList />
        </Container>
      </div>
    );
  }
}

export default App;