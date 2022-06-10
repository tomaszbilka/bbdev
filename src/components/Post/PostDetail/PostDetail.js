import PropTypes from 'prop-types';
import PostHeader from '../PostHeader';
import { StructuredText, Image } from 'react-datocms';
import ReactMarkdown from 'react-markdown';
import { customRenderers } from 'utils/react-markdown';
import remarkGfm from 'remark-gfm';

const PostDetail = ({ data }) => {
  const { title, image, date, content } = data;

  return (
    <section className="post-detail">
      <PostHeader title={title} image={image} date={date} />
      <StructuredText
        data={content}
        renderBlock={({ record }) => {
          switch (record.__typename) {
            case 'ImageRecord':
              return (
                <Image
                  data={record.image.responsiveImage}
                  className="markdown-image"
                />
              );
            case 'MarkdownRecord':
              return (
                <article className="markdown">
                  <ReactMarkdown
                    components={customRenderers}
                    remarkPlugins={[remarkGfm]}
                  >
                    {record.markdown}
                  </ReactMarkdown>
                </article>
              );
            default:
              return null;
          }
        }}
      />
    </section>
  );
};

PostDetail.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PostDetail;
