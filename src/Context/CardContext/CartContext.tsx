import { createContext, ReactNode, useContext, useState } from 'react'
import Product from "../../Pages/Home/Products";

type CartContextData = {
  removeItem: (id: String) => void,
  addItem: (product: Product) => void,
  clearCart: () => void,
  hasInTheCart: (id: String) => boolean,
  products: Product[],
}

type CardProviderProps = {
  children: ReactNode
}


const CartContext = createContext({} as CartContextData)

const CardProvider = ({children}: CardProviderProps) => {

  const [products, setProducts] = useState<Product[]>([])

  function addItem(product: Product): void {
    console.log('addItem', product)
    setProducts([...products, product])
  }

  function removeItem(id: String): void {
    console.log('removeItem', id)
    setProducts(products.filter(p => p.id !== id))
  }

  function clearCart(): void {
    console.log('clearCart')
    setProducts([])
  }

  function hasInTheCart(id: String): boolean {
    console.log('hasInTheCart')
    return products.filter(p => p.id === id).length > 0
  }

  return (
    <CartContext.Provider value={{removeItem, addItem, clearCart, hasInTheCart, products}}>
      {children}
    </CartContext.Provider>
  )
}


const useCard = () => {
  return useContext(CartContext)
}


export { CardProvider, useCard }