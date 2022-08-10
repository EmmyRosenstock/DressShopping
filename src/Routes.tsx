import React,{lazy, Suspense} from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Loader } from "semantic-ui-react";

const Home = lazy(()=> import('./Pages/Home/Home'))
const Cart = lazy(()=>import('./Pages/Cart/Cart'))

const Router : React.FC = () =>{
    const loader = (
        <Loader active inline='centered'>
            CARREGANDO....
        </Loader>
    );
    return(
        <Suspense fallback={loader}>
            <Routes>
            <Route path="/"  element= {<Home/>} />
            <Route path="/carrinho"  element= {<Cart/>} />
           
            </Routes>
        </Suspense>
    )
}
export default Router