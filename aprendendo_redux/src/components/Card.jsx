
import PropTypes from 'prop-types';

import './Card.css'

import { addProductCart } from '../redux/cart/actions';
import { addProductMessage, canMessage, cantMessage, removeMessage  } from '../redux/message/actions';
import {useDispatch, useSelector} from 'react-redux';

const Card =  ({ name,src }) => {

  const dispatch = useDispatch()
  const {canClick} = useSelector(rootReducer => rootReducer.messageReducer)

  function handleProductCart (){
    if (canClick) {
      dispatch(addProductMessage())
      dispatch(addProductCart(name, src))

      dispatch(cantMessage())
      setTimeout(() => {
        dispatch(removeMessage())
        dispatch(canMessage())
      }, 1500);
    }
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
          {canClick ? <button onClick={handleProductCart}>Comprar</button> : <button>Comprar</button>}
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