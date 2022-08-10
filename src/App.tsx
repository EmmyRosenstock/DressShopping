import React, { useReducer } from 'react';
import Footer from './Components/Layout/Footer';
import Navbar from './Components/Layout/Navbar';
import Product from './Pages/Home/Products';
import cartReducer from './Context/reducer/CartReducer';
import TYPES from './Context/reducer/types';
import Router from './Routes';
import './App.css';
import CartStorage from './service/CartStorage';
import { CardProvider } from './Context/CardContext/CartContext';

const InitialValues = {
  products:CartStorage.getProductsCart()
}
const App: React.FC = () => {
  const [state, dispatch] = useReducer(cartReducer, InitialValues)
  function clearCart(){
    dispatch({type:TYPES.CART_CLEAR})
  }
  function removeItem(id:String='0'):void{
    dispatch({type: TYPES.CART_REMOVE, id})
  }
  function addItem(product: Product): void{
    dispatch ({type: TYPES.CART_ADD})
   
  }
  function hasInTheCart(product:Product):boolean{
    return state.products.filter(p=>p.id===product.id).length>0
  }
  return (
  <div className='app'>
    <CardProvider>
      <Navbar/>
     <Router/>
     <Footer/>
    </CardProvider>

  </div>
  );
}

export default App;