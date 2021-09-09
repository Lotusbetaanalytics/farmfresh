import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Milk from './components/pages/Milk';
import DrinkingYoghurt from './components/pages/DrinkingYoghurt';
import StirredYoghurt from './components/pages/StirredYoghurt';
import Recipes from './components/pages/Recipes';
import Contact from './components/pages/Contact';
import WhereToBuy from './components/pages/WhereToBuy';
import Distributor from './components/pages/Distributor';
import Login from './components/pages/Login';

function App() {
  return (
    <Router>
    <Navbar />
  <Switch>
      <Route path='/' exact component={Home} />   
      <Route path='/about' exact component={About} />   
      <Route path='/products/milk' exact component={Milk} />   
      <Route path='/products/drinking-yoghurt' exact component={DrinkingYoghurt} />   
      <Route path='/products/stirred-yoghurt' exact component={StirredYoghurt} />   
      <Route path='/recipes' exact component={Recipes} />   
      <Route path='/contact' exact component={Contact} />   
      <Route path='/where-to-buy' exact component={WhereToBuy} />   
      <Route path='/Distributor' exact component={Distributor} />   
      <Route path='/login' exact component={Login} />   
     </Switch>
   </Router>
  );
}

export default App;
