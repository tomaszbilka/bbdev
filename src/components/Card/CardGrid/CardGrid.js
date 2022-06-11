import Loader from 'components/UI/Loader';
import PropTypes from 'prop-types';
import CardItemPortfolio from 'components/Card/CardItemPortfolio';
import CardItemPost from 'components/Card/CardItemPost';
import Error from 'components/UI/Error';

const CardGrid = ({ data, isLoading, error, type }) => {
  let itemsToRender =
    type === 'posts'
      ? data.map((item) => <CardItemPost key={item.id} itemData={item} />)
      : data.map((item) => <CardItemPortfolio key={item.id} itemData={item} />);

  return (
    <ul className="card-grid">
      {isLoading && !error && <Loader />}
      {!isLoading && error && (
        <Error>We could not fetch data from server!</Error>
      )}
      {!isLoading && !error && itemsToRender}
    </ul>
  );
};

CardGrid.propTypes = {
  data: PropTypes.array,
  error: PropTypes.object,
  isLoading: PropTypes.bool,
  type: PropTypes.string,
};

CardGrid.defaultProps = {
  data: [],
};

export default CardGrid;
