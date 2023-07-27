import React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline, Grid, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.css';
import Link from 'next/link';
import { createTheme } from '@mui/material/styles';
import DetectScreenWidth from '@/utility/detectScreenWidth';
import Head from 'next/head';

const clientSideEmotionCache = createEmotionCache();

function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;


  return (
    <>
      <Head>
        <link rel="icon" href='/public/gaia-website-favicon-color.png' type='image' />
      </Head>
    
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <header>
            <Grid container spacing={2} alignItems="center" justifyContent="center" border={'1px solid red'}>

              <Grid item container spacing={2} xs={6} sm={6} md={4} lg={3} alignItems="center" justifyContent="flex-start" border={'1px solid green'}>
                <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                  <Link href='/'>
                    <p id='headBar_phone' className='headBar_text'>
                      <PhoneIcon className='headBar_text_icon' fontSize='0.9em'></PhoneIcon>
                      <span>
                        0334466664
                      </span>
                    </p>
                  </Link>
                </Grid>
                <Grid item xs={5} sm={7} md={7} lg={7}>
                    <Link href='/'>
                      <p id='headBar_mail' className='headBar_text'>
                        <MailIcon className='headBar_text_icon' fontSize='1.4em'></MailIcon>
                        <span>
                          info@gaiacosmetics.vn
                        </span>
                      </p>
                    </Link>
                </Grid>
              </Grid>

              <Grid container item spacing={2} xs={6} sm={4} md={4} lg={4} alignItems="center" justifyContent="flex-end" border={'1px solid yellow'}>
                <Grid item sm={3}>
                  <Link href='/'>
                    <p className='headBar_text'>
                      Hệ thống cửa hàng
                    </p>
                  </Link>
                </Grid>
                <Grid item sm={3}>
                  <Link href='/'>
                    <p className='headBar_text'>
                      Theo dõi đơn hàng
                    </p>
                  </Link>
                </Grid>
                <Grid item sm={2}>
                  <Link href='/'>
                    <p className='headBar_text'>
                      Tài khoản
                    </p>
                  </Link>
                </Grid>
              </Grid>
            </Grid>

            <style jsx>
              {`
                .headBar_text {
                  font-size: 1em;
                  display: flex;
                  align-items: center;
                  padding: 6px 2px;
                }

                .headBar_text_icon {
                  font-size: 
                }

                .headBar_text > span {
                  
                }

                header {
                  background-color: rgba(80,95,154,0.4);
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
};



App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}

export default App;