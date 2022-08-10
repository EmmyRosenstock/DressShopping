import React from 'react';
import { Grid } from 'semantic-ui-react';
import Loadding from '../Layout/Loadding';
import Product from '../../Pages/Home/Products';
import './style.css'
interface GridProps {
  products: Product[];
  isLoadding: boolean;
  renderProduct: (product: Product) => React.ReactNode;
}

const GridProucts: React.FC<GridProps> = ({ products, isLoadding, renderProduct }) => (
  <Grid container textAlign="center" className='Grid' >
    {isLoadding && <Loadding numbeOfCards={6} />}
    {products.map((product, index: number) => (
      <Grid columns={3}>
      <Grid.Row className='GridRow' mobile={16} tablet={8} computer={1} key={`${index}-GridProucts-${product.id}`}>
        {renderProduct(product)}
      </Grid.Row>
      </Grid>
     
    ))}
  </Grid>
);

export default GridProucts;