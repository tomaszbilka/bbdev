import PropTypes from 'prop-types';

const OfferGrid = ({ item }) => {
  const {
    title,
    price,
    isfeatured: isFeatured,
    currency,
    line1,
    line2,
    line3,
    line4,
  } = item;

  const description = [line1, line2, line3, line4].filter((el) => el);

  const priceItems = price.split(' ');

  const listStyle = isFeatured ? 'offer-item -bigger' : 'offer-item';
  const priceStyle = isFeatured
    ? 'offer-item__price -accent'
    : 'offer-item__price';

  return (
    <li className={listStyle}>
      <h2 className="offer-item__title">{title}</h2>
      <ul className="offer-item__description">
        {description.map((el, index) => (
          <li className="offer-item__item" key={index}>
            {el}
          </li>
        ))}
      </ul>
      <div className="offer-item__price-wrap">
        <span className="offer-item__currency">{priceItems[0]}</span>
        <p className={priceStyle}>{priceItems[1]}</p>
        <span className="offer-item__currency">{currency}</span>
      </div>
    </li>
  );
};

OfferGrid.propTypes = {
  item: PropTypes.object.isRequired,
};

export default OfferGrid;
