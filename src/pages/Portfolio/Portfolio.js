import { useLayoutEffect } from 'react';

const Portfolio = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>portfolio</div>;
};

export default Portfolio;
