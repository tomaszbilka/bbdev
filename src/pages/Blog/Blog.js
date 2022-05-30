import { useLayoutEffect } from 'react';

const Blog = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>Blog</div>;
};

export default Blog;
