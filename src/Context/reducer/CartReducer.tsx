import Product from "../../Pages/Home/Products";
import TYPES from "./types";
import { clearSelect, removeSelect, addSelect } from "./selectors/cartSelector";

interface CartAction{
    type:TYPES;
    id?: String;
    product?: Product;
}
interface CartState{
    products:Product []
}
export default function cartReducer( state:CartState, action:CartAction):CartState{
    switch (action.type){
        case TYPES.CART_CLEAR:
            return {products: clearSelect()
        }
        case TYPES.CART_ADD:
            return{
                products: addSelect(state.products, action.product)
            }
            default:
                return state
    }

    
}