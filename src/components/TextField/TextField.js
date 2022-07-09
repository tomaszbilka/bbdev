import PropTypes from 'prop-types';

const TextField = ({ children }) => {
  return (
    <section className="text-field">
      <p className="text-field__text">{children}</p>
    </section>
  );
};

TextField.propTypes = {
  children: PropTypes.string.isRequired,
};

export default TextField;
