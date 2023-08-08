import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image"
import { Montserrat } from 'next/font/google'
import HouseIcon from '@mui/icons-material/House';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap'
})

export default function FooterMobileView(_font) {
  return (
    <>
      <br/>
      <Grid container direction="column" marginLeft={2}>
        <Grid item sm={12}>
          <Box sx={{
            width: `calc(34vw)`,
            height: `13vw`,
            position: 'relative',
            display: 'flex',
            overflow: 'hidden',
            justifyContent: 'center',
            padding: 0,
            margin: 0
          }}>

            <Image alt="logo" src="/logo-teal.png" fill />
          </Box>
        </Grid>

        <br/>

        <Grid container item sm={12} alignItems={'flex-start'} direction={'column'} justifyContent={'center'}>
          <Grid item sm={5}>
            <Typography id="footer-gaia-title" variant="h6" component="h4" fontSize={'0.9em'} fontWeight={700} marginLeft={1}>
              THÔNG TIN CÔNG TY
            </Typography>
          </Grid>

          <Grid item sm={7}>
            <Typography id="footer-gaia-title" variant="h6" component="h4" fontSize={'0.8em'} fontWeight={500} marginLeft={1} marginTop={2} className={montserrat.className}>
              CÔNG TY TNHH GAIA VIỆT NAM.
            </Typography>
          </Grid>

          <Grid container item sm={8} alignItems={'center'} marginLeft={1} marginTop={1}>
            <HouseIcon sx={{fontSize: '1em'}}>
              
            </HouseIcon>
            <Typography id="footer-gaia-title" variant="h6" lineHeight={1} component="h4" paddingLeft={'10px'} fontSize={'0.8em'} fontWeight={300} className={montserrat.className}>
              Địa Chỉ: Lô TT16-11, KĐT Văn Phú, phường Phú La, <br/>quận Hà Đông, TP Hà Nội
            </Typography>
          </Grid>

          <Grid container item sm={4} alignItems={'center'} marginLeft={1} marginTop={1}>
            <PhoneIcon sx={{fontSize: '1em'}}>
              
            </PhoneIcon>
            <Typography id="footer-gaia-title" variant="h6" component="h4" fontSize={'0.8em'} paddingLeft={'10px'} fontWeight={300} className={montserrat.className}>
              Hotline: 0356488883
            </Typography>
          </Grid>

          <Grid container item sm={5} alignItems={'center'} marginLeft={1} marginTop={1}>
            <MailIcon sx={{fontSize: '1em'}}>

            </MailIcon>
            <Typography id="footer-gaia-title" variant="h6" component="h4" fontSize={'0.8em'} paddingLeft={'10px'} fontWeight={300} className={montserrat.className}>
              Email: info@gaiacosmetics.vn
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}