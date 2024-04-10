
import PropTypes from 'prop-types';

import './Card.css'

import { addProductCart } from '../redux/cart/actions';
import {useDispatch} from 'react-redux'

const Card =  ({ name,src }) => {

  const dispatch = useDispatch()

  function handleProductCart (){
    console.log('eae')
    dispatch(addProductCart(name, src))
  }

  return (
    
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

      <div className="card">
        <div className="image">
          <img src={`http://localhost:3000/files/`+src} alt="nãosei" />
        </div>
        <section id='card'>
          <div className="info">
            <h1>{name}</h1>
              <div className="stars">
              <span className="star material-symbols-outlined">star</span>
              <span className="star material-symbols-outlined">star</span>
              <span className="star material-symbols-outlined">star</span>
              <span className="star material-symbols-outlined">star</span>
              <span className="star material-symbols-outlined">star</span>
            </div>
          </div>
          <button onClick={handleProductCart}>Comprar</button>
        </section>
      </div>
    </>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default Card