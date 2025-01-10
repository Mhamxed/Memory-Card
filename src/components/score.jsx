import '../index.css'
import PropTypes from 'prop-types';

function Score({curScore, bestScore}) {
    return (
        <div className="score">
            <p><strong>Score: {curScore}</strong></p>
            <p><strong>Best score: {bestScore}</strong></p>
        </div>
    )
}

Score.propTypes = {
    curScore: PropTypes.number,
    bestScore: PropTypes.number
  };

export default Score;