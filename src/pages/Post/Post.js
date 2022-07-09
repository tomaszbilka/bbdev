import { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GET_POST_BY_SLUG } from 'utils/datocms';
import { useQuery } from 'graphql-hooks';
import Loader from 'components/UI/Loader';
import PostDetail from 'components/Post/PostDetail';
import Error from 'components/UI/Error';

const Post = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { slug } = useParams();

  const query = GET_POST_BY_SLUG(slug);

  const { loading, error, data } = useQuery(query);

  return (
    <>
      {loading && !error && <Loader />}
      {!loading && error && <Error>We could not fetch data from server!</Error>}
      {!loading && !error && <PostDetail data={data.post} />}
    </>
  );
};

export default Post;
