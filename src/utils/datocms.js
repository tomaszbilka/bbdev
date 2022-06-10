import { GraphQLClient } from 'graphql-hooks';

export const client = new GraphQLClient({
  url: 'https://graphql.datocms.com/',
  headers: {
    Authorization: process.env.REACT_APP_DATOCMS_READ_ONLY_TOKEN,
  },
});

export const PORTFOLIO_QUERY = `query MyQuery {
  allPortfolios {
    id
    link
    slug
    sort
    title
    image {
      responsiveImage {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        title
        srcSet
        webpSrcSet
        width
      }
    }
    description
    imagecolor {
      responsiveImage {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
  }
}
`;

export const GET_PORTFOLIO_BY_SORT = (sort) => {
  return `query MyQuery {
    allPortfolios(filter: {sort: {eq: ${sort}}}) {
      image {
        responsiveImage {
          alt
          aspectRatio
          base64
          bgColor
          height
          sizes
          src
          title
          srcSet
          webpSrcSet
          width
        }
      }
      description
      id
      link
      slug
      sort
      title
      imagecolor {
        responsiveImage {
          alt
          aspectRatio
          base64
          bgColor
          height
          sizes
          src
          srcSet
          title
          webpSrcSet
          width
        }
      }
    }
  }`;
};

export const GET_POSTS_BY_TOPIC = (topic) => {
  return `query MyQuery {
    allPosts(filter: {topic: {eq: ${topic}}}) {
      date
      id
      excerpt
      title
      topic
      slug
      isfeatured
      image {
        responsiveImage {
          alt
          aspectRatio
          base64
          bgColor
          height
          sizes
          src
          srcSet
          title
          webpSrcSet
          width
        }
      }
    }
  }`;
};

export const GET_FEATURED_POSTS = `query MyQuery {
  allPosts(filter: {isfeatured: {eq: "true"}}) {
    date
    id
    excerpt
    title
    topic
    slug
    isfeatured
    image {
      responsiveImage {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
  }
}`;

export const GET_ALL_POSTS = `query MyQuery {
  allPosts {
    date
    id
    excerpt
    title
    topic
    slug
    isfeatured
    image {
      responsiveImage {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
  }
}`;

export const GET_POST_BY_SLUG = (slug) => {
  return `query MyQuery {
    post(filter: {slug: {eq: "${slug}"}}) {
      content {
        value
        blocks {
          __typename
          ... on ImageRecord {
            id
            image {
              responsiveImage {
                alt
                base64
                aspectRatio
                bgColor
                height
                sizes
                src
                srcSet
                title
                webpSrcSet
                width
              }
            }
          }
          ... on MarkdownRecord {
            id
            markdown(markdown: false)
          }
        }
      }
      date
      id
      image {
        responsiveImage {
          alt
          aspectRatio
          base64
          bgColor
          height
          sizes
          src
          srcSet
          title
          webpSrcSet
          width
        }
      }
      isfeatured
      slug
      title
    }
  }
  `;
};

export const GET_PL_OFFER = `query MyQuery {
  allOfferPls(orderBy: title_DESC) {
    id
    isfeatured
    price
    title
    line1
    line2
    line3
    line4
    currency
  }
  offerMoreInfoPl {
    content {
      value
      blocks {
        __typename
        ... on MarkdownRecord {
          id
     			markdown(markdown: false)     
        } 
      }
    }
  }
}`;

export const GET_ENG_OFFER = `query MyQuery {
  allOfferEngs(orderBy: price_ASC) {
    id
    isfeatured
    price
    title
    line1
    line2
    line3
    line4
    currency
  }
  offerMoreInfoEng {
    content {
      value
      blocks {
        __typename
        ... on MarkdownRecord {
          id
     			markdown(markdown: false)     
        }
      }
    }
  }
}`;
