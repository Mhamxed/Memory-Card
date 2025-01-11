import '../index.css'
import PropTypes from 'prop-types';

function Modal({restart, result}) {
    return (
        <div className="modal">
            <h1>{result}</h1>
            <button onClick={restart}>Restart</button>
        </div>
    )
}

Modal.propTypes = {
    restart: PropTypes.func,
    result: PropTypes.string
};

export default Modal;