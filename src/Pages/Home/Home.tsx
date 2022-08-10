import React, { Fragment, useContext, useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { RouteProps, useNavigate } from 'react-router-dom';
import { Header, Segment } from 'semantic-ui-react';
import GridProucts from '../../Components/Grid/Grid';
import ModalProduct from '../../Components/Modal/Modal';
import ProductCard from '../../Components/ProductCad/ProductCard';
import Product from './Products';
import ProductsService from './ProductsService';
import './styles.css'
import {Search} from '../../Components/search/search';
import { useCard } from '../../Context/CardContext/CartContext';
const Home:React.FC<RouteProps> = () =>{
    const [products, setProducts] = useState <Product[]>([])
    const [isLoadding, setIsLoadding] = useState(false)
    const [showModal, setShowModal] = useState (false)
    const [productToShow, setProductToShow] = useState<Product>()
    const {addItem, hasInTheCart} = useCard()
    
    useEffect(()=>{
        setIsLoadding(true)
        ProductsService.getAll()
        .then(response =>{
            setProducts(response)
            setIsLoadding(false)
        })
        .catch(()=>setIsLoadding(false))
    },[])
    function closeModal(){
        setShowModal(false)
        setProductToShow(undefined)
    }
   
  

    return(
        <div className='home'>
        <Helmet>
            <title>Shopping Dress</title>
           
        </Helmet>
        
        {productToShow &&(
            <ModalProduct
            isInTheCart={hasInTheCart(productToShow.id)}
            onClose ={closeModal}
            product={productToShow}
            onAdd ={()=> addItem(productToShow)}
            open = {showModal}
            />
        )}
      
        <Segment placeholder>
            <Header className='TitleProd' as='h1'>
               Dresses
            </Header>
        </Segment>
        <Search products={products} operation={'contains'} field={'imageUrl'} />
        <GridProucts
        products={products}
        isLoadding={isLoadding}
        renderProduct={product => (
          <ProductCard 
          
            onViewCard={() => {
              setProductToShow(product);
              setShowModal(true);
            }}
            onAddtoCart={addItem}
            product={product}
            hasInTheCart={hasInTheCart(product.id!)}
          />
        )}
      />

      
       
        
        </div>
    )

}
export default Home;