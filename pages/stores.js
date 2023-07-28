import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import StoresBrowserView from '@/views/browsers/BrowserStores';

export default function Stores() {
  const matches = useMediaQuery('(min-width:600px)');

  if(matches) {
    return(
      <StoresBrowserView>
        
      </StoresBrowserView>
    ) 
  }
  return(
    <body>
      <p>
        wtf?
      </p>
    </body>
  )
}
