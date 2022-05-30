import { useLayoutEffect } from 'react';

const Offer = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>Offer</div>;
};

export default Offer;
