import React from 'react';
import '../asserts/scss/global.scss';

function MyApp({Component, pageProps}: any) {

    return (
        <React.StrictMode>
                    <Component {...pageProps} />
        </React.StrictMode>
    );
}

export default MyApp;
