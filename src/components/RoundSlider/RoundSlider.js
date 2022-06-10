import { useState, useEffect } from 'react';
import codeImg from 'images/abstract-black.jpg';
import earthImg from 'images/abstract-2-black.jpg';
import binaryImg from 'images/abstract-3-black.jpg';

const images = [codeImg, earthImg, binaryImg];

const RoundSlider = () => {
  const [image, setImage] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setImage((prev) => {
        if (prev === 2) {
          return 0;
        } else {
          return (prev += 1);
        }
      });
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  return (
    <div className="slider">
      <img
        src={images[image]}
        ale="programming case"
        className="slider__image"
      />
    </div>
  );
};

export default RoundSlider;
