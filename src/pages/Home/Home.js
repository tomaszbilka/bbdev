import RoundSlider from 'components/RoundSlider';
import TextField from 'components/TextField';
import { useLayoutEffect } from 'react';
import { homeText } from 'utils/texts';

const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <RoundSlider />
      <TextField>{homeText}</TextField>
    </>
  );
};

export default Home;
