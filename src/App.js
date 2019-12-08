import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import Header from './components/Header';

export default function() {
  const { t, i18n } = useTranslation();

  const handleLanguageClick = useCallback(() => {
    i18n.changeLanguage('am');
  }, [i18n]);

  return (
    <>
      <Header />
      <button onClick={handleLanguageClick}>Change language</button>
      <div>{t('hello')}</div>
    </>
  );
}
