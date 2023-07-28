import * as React from 'react';
import { Grid, Typography } from "@mui/material"
import Link from 'next/link';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

export default function NavbarBrowserView() {

  return(
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
          <Link href='/stores'>
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
  )
}
