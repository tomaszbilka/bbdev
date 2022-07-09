import PropTypes from 'prop-types';
import { Image } from 'react-datocms';

const PostHeader = ({ image, title, date }) => {
  return (
    <div className="post-header">
      <Image data={image.responsiveImage} className="post-header__image" />
      <div className="post-header__wrap">
        <h2 className="post-header__title">{title}</h2>
        <p className="post-header__date">{date}</p>
      </div>
    </div>
  );
};

PostHeader.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default PostHeader;
