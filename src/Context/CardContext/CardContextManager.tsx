import Product from "../../Pages/Home/Products"
export default interface CartContextManager{
    clearCart: Function
    removeItem : (id?:String)=>void
    addItem:(product:Product)=>void
    hasInTheCart:(product: Product)=>boolean
    products: Product[]
}