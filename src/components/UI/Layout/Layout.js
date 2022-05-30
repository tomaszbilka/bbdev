import PropTypes from 'prop-types';
import Footer from 'components/UI/Footer';
import Navbar from 'components/UI/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="general-container">{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
