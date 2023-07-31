import * as React from 'react';
import { Button, Grid, Typography } from "@mui/material"
import Link from 'next/link';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from 'next/image';

export default function NavbarMobileView() {

  return(
    <>
      <Grid container spacing={0} alignItems="center" justifyContent="center">
    
        <Grid item xs={1} >
          <button>
            <MenuIcon>

            </MenuIcon>
          </button>
        </Grid>

        <Grid item xs={4}>

        </Grid>

        <Grid container item xs={2} id="navbar-mobile-logo" justifyContent={"center"} >
          <Link href={''}>
            <Image width={50} height={50}  alt='navbar-logo' src={"/gaia-high-resolution-logo-color-on-transparent-background.png"} />
          </Link>
        </Grid>

        <Grid item xs={4}>

        </Grid>

        <Grid item xs={1}>
          <Link href={'/cart'}>
              <ShoppingCartIcon>

              </ShoppingCartIcon>
          </Link>
        </Grid>


      </Grid>


      <style jsx>{`
        #navbar-mobile-logo {
          margin: 0;
          padding: 0;
        }

        button {
          outline: none;
          background-color: transparent;
          border: none;
          color: 
        }
      
      `}
      </style>
    </>
  )
}
