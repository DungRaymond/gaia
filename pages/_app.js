import React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline} from '@mui/material';

import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.css';
import { createTheme } from '@mui/material/styles';
import Head from 'next/head';
import useMediaQuery from '@mui/material/useMediaQuery';
import dynamic from 'next/dynamic';

const clientSideEmotionCache = createEmotionCache();
const DynamicBrowserHeaderNavbar = dynamic(() => import('@/views/browsers/Navbar'), {
  loading: () => <p>Loading...</p>,
})
const DynamicMobileHeaderNavbar = dynamic(() => import('@/views/mobiles/Navbar'), {
  loading: () => <p>Loading...</p>,
})

function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const matches = useMediaQuery('(max-width: 480px)')

  if(!matches) {
    return (
      <>
        <Head>
          <link rel="icon" href='/public/gaia-website-favicon-color.png' type='image' />
        </Head>
      
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <header>
              <DynamicBrowserHeaderNavbar />
  
            </header>
            <Component {...pageProps} />
            <footer>
              <h1>this is footer</h1>
            </footer>
            <style jsx>
              {`
                .headBar_text {
                  font-size: 1em;
                  display: flex;
                  align-items: center;
                  padding: 6px 2px;
                }

                .headBar_text_icon {
                  
                }

                .headBar_text > span {
                  
                }
                
              `}
            </style>
          </ThemeProvider>
        </CacheProvider>
      </>
    )
  } else {
    // mobile view here
    return(
      <>
        <Head>
          <link rel="icon" href='/public/gaia-website-favicon-color.png' type='image' />
        </Head>
      
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <header>
              <DynamicMobileHeaderNavbar />
  
              <style jsx>
                {`
                  header {
                    background-color: rgba(80,95,154,0.4);
                    background-color: transparent;
                    height: 42px;
                    line-height: 1;
                  }
                `}
              </style>
            </header>
            <Component {...pageProps} />
            <footer>
              <h1>this is footer</h1>
            </footer>
          </ThemeProvider>
        </CacheProvider>
      </>
    )
  }
};



App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}

export default App;