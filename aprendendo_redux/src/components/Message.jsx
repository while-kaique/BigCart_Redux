
import PropTypes from 'prop-types';

import './Message.css'

const Message = ({divClass, message}) => {
  return (
    <div className={`message ${divClass}`}><p>{message}</p></div>
  )
}

Message.propTypes = {
  divClass: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default Message