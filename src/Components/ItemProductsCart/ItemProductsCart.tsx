import React from 'react'
import { Button, Image, List, Popup } from 'semantic-ui-react'
import Product from '../../Pages/Home/Products'
import ButtonRemoveItem from '../ButtonRemove/ButtonRemoveItem'
import {  FiTrash2 ,FiShoppingCart } from "react-icons/fi";
import './style.css'
import { Link } from 'react-router-dom';
const ItemProductCart : React.FC <{
    product: Product
    removeItem:(id:String)=>void
}> =({product, removeItem}) =>{
    return(
        <List.Item className='ProductList'>
             <List.Content className='ProductName'>{product.title}</List.Content>
            <Image size='medium' src={product.imageUrl} className='productImg'/>
            <List.Content floated='right' className='contentProduct'>
            <Popup
            hideOnScroll
            position='left center'
            on='click'
            content={<ButtonRemoveItem onRemove={() => removeItem(product.id)} />}
            trigger={<Button className="Lixob"><FiTrash2 size={20}/></Button>}
            />
            <Link to= '/'>
            <Button color="green" fluid animated className='btnProdutosI'>
            <FiShoppingCart size={20}/>
              
            </Button>
          </Link>
            </List.Content>
            
           
           
        </List.Item>
    )
}
export default ItemProductCart