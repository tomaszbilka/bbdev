import { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardGrid from 'components/Card/CardGrid';
import FilterCards from 'components/FilterCards';
import { names } from 'utils/portfolio';
import { GET_PORTFOLIO_BY_SORT } from 'utils/datocms';
import { useQuery } from 'graphql-hooks';
import { PORTFOLIO_QUERY } from 'utils/datocms';

let sortedPortfolios = [];

const FilteredPortfolio = () => {
  const { sort } = useParams();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sortedQuery = GET_PORTFOLIO_BY_SORT(sort);
  const query = sort === 'all' ? PORTFOLIO_QUERY : sortedQuery;

  const { loading, error, data } = useQuery(query);

  if (!loading && !error) {
    sortedPortfolios = data?.allPortfolios;
  }

  return (
    <>
      <FilterCards names={names} slug="portfolio" />
      <CardGrid
        data={sortedPortfolios}
        isLoading={loading}
        error={error}
        type="portfolio"
      />
    </>
  );
};

export default FilteredPortfolio;
