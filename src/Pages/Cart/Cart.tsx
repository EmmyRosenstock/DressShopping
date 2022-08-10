import React from 'react';
import Helmet from 'react-helmet';
import { Header, Segment } from 'semantic-ui-react';
import { RouteProps } from 'react-router';
import ListProductsCart from '../../Components/ListProducts/ListProducts';

const Cart:React.FC<RouteProps> = () =>{
    return(
        <>
        <Helmet>
            <title>Carrinho</title>
        </Helmet>
        <ListProductsCart/>
        </>
    )

}
export default Cart;