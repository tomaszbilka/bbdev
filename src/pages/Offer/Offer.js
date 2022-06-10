import { useLayoutEffect, useState } from 'react';
import Language from 'components/Language';
import { GET_ENG_OFFER, GET_PL_OFFER } from 'utils/datocms';
import { useQuery } from 'graphql-hooks';
import OfferGrid from '../../components/Offer/OfferGrid';
import Loader from '../../components/UI/Loader';

let selectedData = [];

const Offer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('PL');

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const changeLanguageHandler = (lang) => {
    setSelectedLanguage(lang);
  };

  const query = selectedLanguage === 'PL' ? GET_PL_OFFER : GET_ENG_OFFER;

  const { loading, error, data } = useQuery(query);

  if (!loading) {
    selectedData =
      selectedLanguage === 'PL'
        ? [data.allOfferPls, data.offerMoreInfoPl]
        : [data.allOfferEngs, data.offerMoreInfoEng];
  }

  return (
    <>
      <Language onClick={changeLanguageHandler} />
      {loading && !error && <Loader />}
      {!loading && !error && <OfferGrid items={selectedData} />}
      {!loading &&
        error &&
        error.graphQLErrors.map((el, index) => <p key={index}>{el.message}</p>)}
    </>
  );
};

export default Offer;
