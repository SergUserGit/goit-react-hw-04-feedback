import PropTypes from 'prop-types';
import css from './Notification.module.css';

const Notification = function ({ header, message }) {
  return (
    <>
      {' '}
      <h2 className={css.notificationTitle}> {header}</h2>{' '}
      <h3 className={css.notificationMessage}> {message}</h3>{' '}
    </>
  );
};

Notification.propTypes = {
  header: PropTypes.string,
  message: PropTypes.string,
};

export default Notification;
