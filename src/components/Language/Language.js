import { useState } from 'react';
import PropTypes from 'prop-types';

const Language = ({ onClick }) => {
  const [language, setLanguage] = useState('PL');

  const changePlLanguageHandler = () => {
    setLanguage('PL');
    onClick('PL');
  };

  const changeEngLanguageHandler = () => {
    setLanguage('ENG');
    onClick('ENG');
  };

  const plStyle = language === 'PL' ? 'lang__name -active' : 'lang__name';
  const engStyle = language === 'ENG' ? 'lang__name -active' : 'lang__name';

  return (
    <div className="lang">
      <button
        className={engStyle}
        type="button"
        onClick={changeEngLanguageHandler}
      >
        ENG
      </button>
      <p className="lang__line">|</p>
      <button
        className={plStyle}
        type="button"
        onClick={changePlLanguageHandler}
      >
        PL
      </button>
    </div>
  );
};

Language.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Language;
