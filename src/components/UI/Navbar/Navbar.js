import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="nav__logo">
        <div>BBDEV</div>
      </Link>
      <ul className="nav__list">
        <li>
          <NavLink
            to="/blog"
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
    </nav>
  );
};

export default Navbar;
