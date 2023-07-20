import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function DetectScreenWidth() {
  const matches = useMediaQuery('(min-width:414px)');

  // return <span>{`(min-width:600px) matches: ${matches}`}</span>;
  return matches ? 'mobile' : 'browser';
}