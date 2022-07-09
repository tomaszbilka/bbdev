import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image } from 'react-datocms';

const CardItemPost = ({ itemData }) => {
  const { title, excerpt, image, slug, date } = itemData;

  const postDate = date;

  return (
    <li className="card">
      <Link to={`/blog/posts/${slug}`}>
        <div className="card__img-wrap">
          <Image data={image.responsiveImage} className="card__image" />
        </div>
        <div className="card__triangle"></div>
        <div className="card__text-wrap">
          <h3 className="card__title">{title}</h3>
          <p className="card__date">{postDate}</p>
          <p className="card__text">{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

CardItemPost.propTypes = {
  itemData: PropTypes.object,
};

export default CardItemPost;
