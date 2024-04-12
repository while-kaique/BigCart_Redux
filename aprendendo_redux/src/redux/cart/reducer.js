
import CartActionTypes from "./action-types";

const initialState = {
    products: [],
    productsTotalPrice: 0,
    productsCount: 0
}

const cartReducer = (state = initialState, action) => {
    var isAlreadyInProducts;
    var isMoreThanOne;

    switch (action.type){
        case CartActionTypes.ADD_PRODUCT:
            isAlreadyInProducts = (state.products.some(product => product.index === action.payload.index))

            if (isAlreadyInProducts){
                return {
                    ...state,
                    products: state.products.map((product)=>{
                        return product.index === action.payload.index ? {...product, quantity: product.quantity + 1} : product
                    }),
                    productsTotalPrice: state.productsTotalPrice + action.payload.value,
                    productsCount: state.productsCount + 1
                }
            }
            return {
                ...state, 
                products: [...state.products, action.payload],
                productsCount: state.productsCount + 1,
                productsTotalPrice: state.productsTotalPrice + action.payload.value
            }
        case CartActionTypes.REMOVE_PRODUCT:

            isMoreThanOne = state.products.some(product=>product.index === action.payload.index && product.quantity > 1)
            
            if (isMoreThanOne){
                return {
                    ...state,
                    products: state.products.map((product)=>{
                        if (product.index === action.payload.index){
                            return {...product, quantity: product.quantity - 1}
                        }
                        return product
                    }),
                    productsTotalPrice: state.productsTotalPrice - action.payload.value,
                    productsCount: state.productsCount - 1
                }
            } 
            return {
                ...state,
                products: state.products.filter( product => product.index !== action.payload.index),
                productsTotalPrice: state.productsTotalPrice - action.payload.value,
                productsCount: state.productsCount - 1
            }

    default: 
        return state
}

}

export default cartReducer;