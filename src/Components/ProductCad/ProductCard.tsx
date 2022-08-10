import React from "react";
import { Button, Card, Divider, Icon, Image, Label, Popup } from 'semantic-ui-react';
import Product from "../../Pages/Home/Products";
import { FiShoppingCart,FiPlus, FiEye  } from "react-icons/fi";
import './styles.css'
const ProductCard: React.FC<{
    product: Product
    onAddtoCart: Function
    onViewCard: Function
    hasInTheCart: boolean
}> = ({ product, onAddtoCart, onViewCard, hasInTheCart }) => {
    const btnAdd = (
        <Button
          className="btnAdd"
            onClick={() => onAddtoCart(product)}
            disabled={hasInTheCart}
            color={hasInTheCart ? 'green' : 'blue'}
        >
            <FiPlus />
            <FiShoppingCart />
        </Button>
    );
    const btnView = (
        <Button onClick={() => onViewCard()} color="blue" className="btnView">
        <FiEye />
        </Button>
    )
    return(
        <div className='styleCard'>
              <Image size="tiny" src={product.imageUrl} className='ImgProduct' />
            <Card.Content>
                <Card.Header className="titleCard">{product.title}</Card.Header>
                <Divider hidden/>
                <Card.Meta>
                    <Label tag color='green' size='large' className="priceLabel">
                        {product.price &&
                         product.price.toLocaleString('pt-BR',{
                            style: 'currency',
                            currency:'BRL',
                         })
                        }
                    </Label>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra textAlign="center">
             <Button.Group>
             <Popup trigger={btnAdd} content="Add ao carrinho" hideOnScroll />
             <Popup trigger={btnView} content="Ver mais" hideOnScroll />
             </Button.Group>
             </Card.Content>
        </div>
    )
}
export default ProductCard