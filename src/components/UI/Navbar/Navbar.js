import { NavLink, Link } from 'react-router-dom';
import logo from '../../../images/logo/logo.svg';

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
            to="/offer"
            className={(navData) =>
              navData.isActive ? 'nav__link -active' : 'nav__link'
            }
          >
            OFFER
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio/all"
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
    </nav>
  );
};

export default Navbar;
