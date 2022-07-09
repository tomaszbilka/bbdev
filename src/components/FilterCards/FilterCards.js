import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

const FilterCards = ({ names, slug }) => {
  const { sort } = useParams();

  return (
    <ul className="filter-card">
      {names.map((name) => (
        <li key={name}>
          <Link
            to={`/${slug}/${name}`}
            className={
              name === sort
                ? 'filter-card__names -active'
                : 'filter-card__names'
            }
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

FilterCards.propTypes = {
  names: PropTypes.array.isRequired,
  slug: PropTypes.string.isRequired,
};

export default FilterCards;
