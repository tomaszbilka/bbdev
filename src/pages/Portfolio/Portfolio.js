import { useLayoutEffect } from 'react';

const FilteredPortfolio = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <h2>Protforio will be here soon...</h2>
    </section>
  );
};

export default FilteredPortfolio;
