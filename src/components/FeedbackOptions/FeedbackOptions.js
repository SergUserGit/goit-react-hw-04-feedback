import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = function ({
  onGoodFeedBack,
  onNeutralFeedBack,
  onBadFeedBack,
  labelGood,
  labelNeutral,
  labelBad,
}) {
  return (
    <ul className={css.optionsList}>
      <li>
        <button
          className={css.optionsButton}
          type="button"
          onClick={onGoodFeedBack}
        >
          {labelGood}
        </button>
      </li>
      <li>
        <button
          className={css.optionsButton}
          type="button"
          onClick={onNeutralFeedBack}
        >
          {labelNeutral}
        </button>
      </li>
      <li>
        <button
          className={css.optionsButton}
          type="button"
          onClick={onBadFeedBack}
        >
          {labelBad}
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onGoodFeedBack: PropTypes.func.isRequired,
  onNeutralFeedBack: PropTypes.func.isRequired,
  onBadFeedBack: PropTypes.func.isRequired,
  labelGood: PropTypes.string,
  labelNeutral: PropTypes.string,
  labelBad: PropTypes.string,
};

export default FeedbackOptions;
