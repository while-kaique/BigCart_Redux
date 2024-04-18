import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux'

import './styles_components/Product.css'
import './media_queries_components/Product.css'

import { addProductCart, removeAllProducts, removeProductCart } from '../redux/cart/actions';


const Product = ({name, src, value, index}) => {

  const {products} = useSelector(rooteReducer => rooteReducer.cartReducer)
  const oneProdut = products.filter((product)=>{
    return product.index === index
  })
  const quantity = oneProdut[0].quantity
  
  const dispatch = useDispatch()

  function handleProductCart (){
    dispatch(addProductCart(name, src, value, index))
  }
  function handleRemoveProductCart (){
    dispatch(removeProductCart(index, value))
  }
  function handleRemoveAllProducts (){
    dispatch(removeAllProducts(index, value, quantity))
  }

  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />


      <div className="product">
          <img src={`https://bigcart-ecommerce-8952.onrender.com/files/`+src} alt="eae" />
          <div className="infoCart">
            <h1>{name}</h1>
            <h2>{`R$${value}0`}</h2>
            <div className="simbols">
              <span className="more material-symbols-outlined" onClick={handleProductCart}>add</span>
              <p>{quantity}</p>
              <span className="less material-symbols-outlined" onClick={handleRemoveProductCart}>remove</span>
            </div>
          </div>
          <span className="close less material-symbols-outlined" onClick={handleRemoveAllProducts}>close</span>
      </div>
    </>
  )
}


Product.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
};

export default Product