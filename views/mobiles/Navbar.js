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
      <Grid container spacing={0} alignItems="center" justifyContent="center" id="navbar-mobile">
    
        <Grid container item xs={1} justifyContent={"center"} >
          <button onClick={(e) => {
            e.preventDefault();
            alert('cool')
          }}>
            <MenuIcon>

            </MenuIcon>
          </button>
        </Grid>

        <Grid item xs={4}>

        </Grid>

        <Grid container item xs={2} id="navbar-mobile-logo" justifyContent={"center"} >
          <Link href={''}>
            <Image width={50} height={50} style={{padding: 'auto 0'}} alt='navbar-logo' src={"/gaia-high-resolution-logo-color-on-transparent-background.png"} />
          </Link>
        </Grid>

        <Grid item xs={4}>

        </Grid>

        <Grid container item xs={1} justifyContent={"center"}>
          <Link href={'/cart'}>
              <ShoppingCartIcon>

              </ShoppingCartIcon>
          </Link>
        </Grid>


      </Grid>


      <style jsx>{`
        #navbar-mobile-logo {
          
        }

        button {
          outline: none;
          background-color: transparent;
          border: none;
          color: 
        }
        #navbar-mobile > a {
          height: 50px;
        }

        #navbar-mobile {
          height: 50px; !important
        }
      
      `}
      </style>
    </>
  )
}
