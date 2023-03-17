import React, { useState } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodFeedBack = () => {
    setGood(state => state + 1);
  };

  const neutralFeedBack = () => {
    setNeutral(state => state + 1);
  };

  const badFeedBack = () => {
    setBad(state => state + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage =
      countTotalFeedback() === 0
        ? 0
        : Math.floor((good / countTotalFeedback()) * 100);
    return String(percentage) + '%';
  };

  return (
    <section>
      <h1 className={css.sectionTitle}>{title}</h1>
      <FeedbackOptions
        onGoodFeedBack={goodFeedBack}
        onNeutralFeedBack={neutralFeedBack}
        onBadFeedBack={badFeedBack}
        labelGood="Good"
        labelNeutral="Neutral"
        labelBad="Bad"
      />
      {countTotalFeedback() === 0 && (
        <Notification header="Statistics" message="No feedback given" />
      )}
      {countTotalFeedback() > 0 && (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={countTotalFeedback()}
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          headerStatistics="Statistics"
          headerGood="Good:"
          headerNeutral="Neutral:"
          headerBad="Bad:"
          headerTotal="Total:"
          headerPositive="Positive feedback:"
        />
      )}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
