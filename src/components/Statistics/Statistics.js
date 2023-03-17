import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = function ({
  good,
  neutral,
  bad,
  totalFeedback,
  countPositiveFeedbackPercentage,
  headerStatistics,
  headerGood,
  headerNeutral,
  headerBad,
  headerTotal,
  headerPositive,
}) {
  return (
    <>
      <h2 className={css.statisticTitle}>{headerStatistics}</h2>
      <ul className={css.statisticList}>
        <li className={css.statisticItem}>
          <h3 className={css.statisticType}>{headerGood}</h3>
          <span>{good}</span>
        </li>
        <li className={css.statisticItem}>
          <h3 className={css.statisticType}>{headerNeutral}</h3>
          <span>{neutral}</span>
        </li>
        <li className={css.statisticItem}>
          <h3 className={css.statisticType}>{headerBad}</h3>
          <span>{bad}</span>
        </li>
        <li className={css.statisticItem}>
          <h3 className={css.statisticType}>{headerTotal}</h3>
          <span>{totalFeedback}</span>
        </li>
        <li className={css.statisticItem}>
          <h3 className={css.statisticType}>{headerPositive}</h3>
          <span>{countPositiveFeedbackPercentage}</span>
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  totalFeedback: PropTypes.number,
  countPositiveFeedbackPercentage: PropTypes.string,
  headerStatistics: PropTypes.string,
  headerGood: PropTypes.string,
  headerNeutral: PropTypes.string,
  headerBad: PropTypes.string,
  headerTotal: PropTypes.string,
  headerPositive: PropTypes.string,
};

export default Statistics;
