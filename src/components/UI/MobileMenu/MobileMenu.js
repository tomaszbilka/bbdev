import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mobileStyle = isMobileMenuOpen ? 'mobile-menu -open' : 'mobile-menu';

  const mobileNavStyle = isMobileMenuOpen ? 'navMobile -open' : 'navMobile';

  const toggleMobileMenuHandler = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenuHandler = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className={mobileStyle} onClick={toggleMobileMenuHandler}>
        <div className="mobile-menu__first"></div>
        <div className="mobile-menu__second"></div>
        <div className="mobile-menu__third"></div>
        <div className="mobile-menu__fourth"></div>
      </div>
      <div className={mobileNavStyle}>
        <ul className="navMobile__list">
          <li>
            <NavLink
              to="/blog/featured"
              className={(navData) =>
                navData.isActive ? 'navMobile__link -active' : 'navMobile__link'
              }
              onClick={closeMobileMenuHandler}
            >
              BLOG
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/offer"
              className={(navData) =>
                navData.isActive ? 'navMobile__link -active' : 'navMobile__link'
              }
              onClick={closeMobileMenuHandler}
            >
              OFFER
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio/all"
              className={(navData) =>
                navData.isActive ? 'navMobile__link -active' : 'navMobile__link'
              }
              onClick={closeMobileMenuHandler}
            >
              PORTFOLIO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={(navData) =>
                navData.isActive ? 'navMobile__link -active' : 'navMobile__link'
              }
              onClick={closeMobileMenuHandler}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
