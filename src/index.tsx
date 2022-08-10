import React from 'react';
import  ReactDOM  from 'react-dom';
import  Helmet  from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css'
import * as sw from './serviceWorker'

const Root:React.FC = () =>(
 
  <BrowserRouter>
  <Helmet titleTemplate=' Shopping Cart' defaultTitle='ShoppingCart'/>
  <App/>
</BrowserRouter>
  
)
ReactDOM.render(<Root />, document.getElementById('root'));

sw.register();