import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux'

import './Product.css'
import { addProductCart, removeProductCart } from '../redux/cart/actions';


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

  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />


      <div className="product">
          <img src={`http://localhost:3000/files/`+src} alt="eae" />
          <div className="infoCart">
            <h1>{name}</h1>
            <h2>{`R$${value}0`}</h2>
            <div className="simbols">
              <span className="more material-symbols-outlined" onClick={handleProductCart}>add</span>
              <p>{quantity}</p>
              <span className="less material-symbols-outlined" onClick={handleRemoveProductCart}>remove</span>
            </div>
          </div>
          <span className="close less material-symbols-outlined">close</span>
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