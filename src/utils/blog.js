export const topics = [
  'featured',
  'other',
  'react',
  'css',
  'next',
  'all',
  'javascript',
];

export const sortPostsByDate = (posts) => {
  const sortedPosts = posts.sort((a, b) => {
    const firstDate = new Date(a.date);
    const secondDate = new Date(b.date);
    return secondDate - firstDate;
  });
  return sortedPosts;
};
