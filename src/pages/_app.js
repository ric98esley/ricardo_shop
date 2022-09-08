import AppContext from '@context/AppContext';
import Script from 'next/script';
import useInitialState from '@hooks/useInitialState';

import Header from '@components/Header';

import '@styles/globals.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WBM9S9P7KB" />
      <Script id="google-analytics" strategy="afterInterative">
        {`window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-WBM9S9P7KB');`}
      </Script>
      <Header />

      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
