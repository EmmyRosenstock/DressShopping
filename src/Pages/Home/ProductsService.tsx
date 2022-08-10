import Product from "./Products"
import DressDetail from "../../service/DressApi"


class ProductsService {
    public getAll(): Promise<Product[]> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const products: Product[] = DressDetail.map(product => ({
            id: product.id,
            title: product.title,
            imageUrl: product.ImgUrl,
            price: product.price,
            data: product.data
          
          }));
          resolve(products);
        }, 2000);
      });
    }
  }
export default new ProductsService