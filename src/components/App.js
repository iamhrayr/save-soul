import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export default function() {
  const { t, i18n } = useTranslation();

  const handleLanguageClick = useCallback(() => {
    i18n.changeLanguage('am');
  }, [i18n]);

  return (
    <div>
      <button onClick={handleLanguageClick}>Change language</button>
      <div>{t.hello}</div>
    </div>
  );
}
