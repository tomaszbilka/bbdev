import { NavLink, Link } from 'react-router-dom';
import logo from '../../../images/logo/logo.svg';
import MobileMenu from '../MobileMenu';

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} alt="bbdev's logo" className="nav__logo" />
      </Link>
      <ul className="nav__list">
        <li>
          <NavLink
            to="/blog/featured"
            className={(navData) =>
              navData.isActive ? 'nav__link -active' : 'nav__link'
            }
          >
            BLOG
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className={(navData) =>
              navData.isActive ? 'nav__link -active' : 'nav__link'
            }
          >
            PORTFOLIO
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={(navData) =>
              navData.isActive ? 'nav__link -active' : 'nav__link'
            }
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
      <MobileMenu />
    </nav>
  );
};

export default Navbar;
