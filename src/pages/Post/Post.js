import { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { blogId } = useParams();
  return <div>post: {blogId}</div>;
};

export default Post;
