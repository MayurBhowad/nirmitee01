
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar.layout';
import Home from './components/home/Home.component';
import Footer from './components/layout/Footer.layout';
import SingleProduct from './components/products/SingleProduct.component';
import Cart from './components/cart/Cart.component';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" exact component={SingleProduct} />
        <Route path="/cart" exact component={Cart} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
