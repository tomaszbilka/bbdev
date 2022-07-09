import PropTypes from 'prop-types';
import OfferItem from '../OfferItem';
import { StructuredText } from 'react-datocms';
import ReactMarkdown from 'react-markdown';
import { customRenderers } from 'utils/react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const OfferGrid = ({ items }) => {
  const [offerCards, offerInfo] = items;

  return (
    <section className="offer-container">
      <ul className="offer-grid">
        {offerCards?.map((el) => (
          <OfferItem item={el} key={el.id} />
        ))}
      </ul>
      <StructuredText
        data={offerInfo?.content}
        renderBlock={({ record }) => {
          switch (record.__typename) {
            case 'MarkdownRecord':
              return (
                <article className="markdown-offer">
                  <ReactMarkdown
                    components={customRenderers}
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
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

OfferGrid.propTypes = {
  items: PropTypes.array,
};

OfferGrid.defaultProps = {
  items: [],
};

export default OfferGrid;
