import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModel from './components/ItemModel';
import AppFooter from './components/AppFooter';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
            <ItemModel />
            <ShoppingList />
        </Container>
        <br/><br/><br/>
        <AppFooter/>
      </div>
    </Provider>
  );
}

export default App;
