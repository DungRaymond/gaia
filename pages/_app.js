import React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline, Grid, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
  <CacheProvider value={emotionCache}>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <header>
        <Grid container spacing={1}>
          <Grid item xs={0} sm={5} md={4} lg={2} xl={2} >
            <Typography variant='p' component='p'>
              <PhoneIcon></PhoneIcon>
              123123123
            </Typography>
          </Grid>
        </Grid>
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