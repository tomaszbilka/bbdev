import PropTypes from 'prop-types';
import { Image } from 'react-datocms';

const CardItemPortfolio = ({ itemData }) => {
  const { title, description, image, link, imagecolor } = itemData;

  return (
    <li className="card">
      <a href={link} target="_blank" rel="noreferrer">
        <div className="card__img-wrap">
          <Image data={image.responsiveImage} className="card__image" />
          <Image
            data={imagecolor.responsiveImage}
            className="card__image-color"
          />
        </div>
        <div className="card__triangle"></div>
        <div className="card__text-wrap">
          <h3 className="card__title">{title}</h3>
          <p className="card__text">{description}</p>
        </div>
      </a>
    </li>
  );
};

CardItemPortfolio.propTypes = {
  itemData: PropTypes.object,
};

export default CardItemPortfolio;
