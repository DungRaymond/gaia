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


const clientSideEmotionCache = createEmotionCache();

function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;


  return (
  <CacheProvider value={emotionCache}>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <header>
        <Grid container spacing={1}>

          <Grid item container spacing={1} xs={6} sm={6}>
            <Grid item xs={5} sm={5} md={4} lg={3} xl={4} >
              <Link href='/'>
                <p id='headBar_phone' className='headBar_text'>
                  <PhoneIcon className='headBar_text_icon' fontSize='0.9em'></PhoneIcon>
                  <span>
                    012335456
                  </span>
                </p>
              </Link>
            </Grid>
            <Grid item xs={5} sm={5} md={4} lg={5}>
                <Link href='/'>
                  <p id='headBar_mail' className='headBar_text'>
                    <MailIcon className='' fontSize='0.9em'></MailIcon>
                    <span>
                      info@gaiacosmetics.vn
                    </span>
                  </p>
                </Link>
            </Grid>
          </Grid>

          <Grid item container spacing={1} xs={6} sm={6}>
            <Grid item sm={4}>
              <Link href='/'>
                <p className='headBar_text'>
                  Hệ thống cửa hàng
                </p>
              </Link>
            </Grid>
            <Grid item sm={4}>
              <Link href='/'>
                <p className='headBar_text'>
                  Theo dõi đơn hàng
                </p>
              </Link>
            </Grid>
            <Grid item sm={4}>
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
              font-size: 0.9em;
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
      </header>
      <Component {...pageProps} />
      <footer>
        <h1>this is footer</h1>
      </footer>
    </ThemeProvider>
  </CacheProvider>
  )
};



App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}

export default App;