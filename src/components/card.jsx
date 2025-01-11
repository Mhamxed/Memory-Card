import '../index.css'
import PropTypes from 'prop-types';

function Card({src, name, id, handleCardClick}) {
    return (
        <div onClick={handleCardClick} className="card" id={id}>
            <img src={src} alt={name} />
            <p><strong>{name}</strong></p>
        </div>
    )
}

Card.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
    handleCardClick: PropTypes.func
  };

export default Card;
