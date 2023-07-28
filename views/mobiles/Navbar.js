import * as React from 'react';
import { Grid, Typography } from "@mui/material"
import Link from 'next/link';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavbarMobileView() {

  return(
    <Grid container spacing={2} alignItems="center" justifyContent="center" border={'1px solid red'}>
  
      <h1>This is mobile navbar</h1>
    </Grid>
  )
}
