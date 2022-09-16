// ** React Imports
import React from 'react';

// ** Styles
import '../asserts/scss/global.scss';

// ** Imports i18n
import { I18nextProvider } from 'react-i18next';
import i18n from '../lib/helpers/i18n'


function MyApp({ Component, pageProps }: any) {

  return (
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
      </I18nextProvider>
    </React.StrictMode>
  );
}

export default MyApp;
