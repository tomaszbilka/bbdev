import { useLayoutEffect } from 'react';
import { topics } from 'utils/blog';
import { useParams } from 'react-router-dom';
import { useQuery } from 'graphql-hooks';
import {
  GET_ALL_POSTS,
  GET_FEATURED_POSTS,
  GET_POSTS_BY_TOPIC,
} from 'utils/datocms';
import CardGrid from 'components/Card/CardGrid';
import FilterCards from 'components/FilterCards';
import { sortPostsByDate } from 'utils/blog';

let sortedPosts = [];

const Blog = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { sort } = useParams();

  const query =
    sort === 'all'
      ? GET_ALL_POSTS
      : sort === 'featured'
      ? GET_FEATURED_POSTS
      : GET_POSTS_BY_TOPIC(sort);

  const { loading, error, data } = useQuery(query);

  if (!loading && !error) {
    sortedPosts = sortPostsByDate(data?.allPosts);
  }

  return (
    <>
      <FilterCards names={topics} slug="blog" />
      <CardGrid
        data={sortedPosts}
        isLoading={loading}
        error={error}
        type="posts"
      />
    </>
  );
};

export default Blog;
