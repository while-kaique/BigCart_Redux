
import PropTypes from 'prop-types';

import './Card.css'

import { addProductCart } from '../redux/cart/actions';
import { addProductMessage, removeMessage } from '../redux/message/actions';
import {useDispatch} from 'react-redux'
import { useState } from 'react';

const Card =  ({ name,src }) => {

  const [canClick, setCanClick] = useState(true)

  const dispatch = useDispatch()

  function handleProductCart (){
    setCanClick(false)
    dispatch(addProductMessage())
    setTimeout(() => {
      dispatch(removeMessage())
      setCanClick(true)
    }, 3000);
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