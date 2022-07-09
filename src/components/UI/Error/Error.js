import PropTypes from 'prop-types';

const Error = ({ children }) => {
  return <div className="error-massage">{children}</div>;
};

Error.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Error;
