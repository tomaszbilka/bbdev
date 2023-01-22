import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__link">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="footer__link">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="footer__link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="footer__rights">
        <span className="footer__name">bbdev</span> all rights reserved 2022
        &copy;
      </div>
    </footer>
  );
};

export default Footer;
