import { Grid, Paper, Slide, Typography, Button, Box } from "@mui/material";
import Image from 'next/image'
import { useRef, useState, useCallback } from 'react'
import { Montserrat } from "next/font/google";
import { Montserrat_Alternates } from "next/font/google";
import { useRouter } from 'next/router'

const mont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

const montalte = Montserrat_Alternates({
  weight: '700',
  subsets: ['latin'],
  display: 'swap'
})

export default function HomeMobileView() {
  const router = useRouter();
  const bannerList = [
    '/banner/banner1.jpg',
    '/banner/banner2.jpg',
    '/banner/banner3.jpg'
  ]
  const containerRef = useRef(null);

  const bannerSm = (imgpath, urlpath) => {
    return (
      <Box sx={{
        width: `calc(100vw)`,
        height: `calc(100vw/2 - 30px)`,
        position: 'relative',
        margin: 0,
        padding: 0
      }}
      onClick={(event) => {
        event.preventDefault();
        router.push('/collections/combo-tre-hoa')
      }}
      >
        <Image fill alt="blog" src="/flyer/age_miracle_routine.jpg" />
      </Box>
    )
  }
  const bannerMd = (imgpath, urlpath) => {
    return (
      <Box sx={{
        width: `calc(48vw)`,
        height: `calc(48vw/2 - 30px)`,
        position: 'relative',
        margin: 0,
        padding: 0
      }}
      onClick={(event) => {
        event.preventDefault();
        router.push('/collections/combo-tre-hoa')
      }}
      >
        <Image fill alt="blog" src="/flyer/age_miracle_routine.jpg" />
      </Box>
    )
  }

  const banner = (bpath) => {
    return (
      <Paper sx={{ m: 1 }} elevation={4}>
        <Box sx={{
            width: `calc(100vw)`,
            height: `calc(100vw/2)`,
            position: 'relative',
            margin: 0,
            padding: 0
        }}>
          <Image fill alt='banner' src={bannerList[bpath]} />
        </Box>
      </Paper>
    );

  } 

  const [slide, setSlide] = useState(1);
  const switchSlide = () => {
    setTimeout(() => {
      if(slide == 3) {
        setSlide(slide - 2)
      } else {
        setSlide(slide + 1)
      }
    }, 3500)
  }
  return (
    <>
      

        <Box id="here"
            ref={containerRef}
            sx={{
              width: `calc(100vw)`,
              height: `calc(100vw/2 + 12px)`,
              position: 'relative',
              display: 'flex',
              overflow: 'hidden',
              justifyContent: 'center',
              padding: 0,
              margin: 0
        }}>
          <Slide direction="up" in={slide == 1 && true} container={containerRef.current} mountOnEnter timeout={{appear: 0, enter: 500, exit: 0}} unmountOnExit addEndListener={switchSlide}>
              {banner(0)}
          </Slide>
          <Slide direction="up" in={slide == 2 && true} container={containerRef.current} mountOnEnter timeout={{appear: 0, enter: 500, exit: 0}} unmountOnExit addEndListener={switchSlide}>
              {banner(1)}
          </Slide>
          <Slide direction="up" in={slide == 3 && true} container={containerRef.current} mountOnEnter timeout={{appear: 0, enter: 500, exit: 0}} unmountOnExit addEndListener={switchSlide}>
              {banner(2)}
          </Slide>

        </Box>

<br/>
        <Grid container alignItems={'center'} justifyContent={'center'}>
          <Grid xs={10} sm={8} container item alignItems={'center'} justifyContent={'center'}>
            <Typography variant="h5" component={'h4'} fontSize={'1.9em'} className={montalte.className} color={'#35155D'} fontWeight={700}>
              GAIA VIỆT NAM
            </Typography>
            <Grid item container justifyContent={'center'} alignItems={'center'}>
              <span className="line_left"></span>
              <Image width={24} height={24} alt="mini_logo" src={'/favicon/apple-touch-icon.png'} />
              <span className="line_right"></span>
            </Grid>
          </Grid>

          <br />

          <Grid xs={10} sm={8} container item wrap="nowrap" alignItems={'center'} justifyContent={'center'} marginTop={2}>
            <Typography variant="p" textAlign={'center'} component={'h4'} className={mont.className} fontSize={'1.2em'} fontWeight={500} color={'rgba(97, 103, 122, 0.6)'}>
              Mỹ phẩm hàng đầu Việt Nam Mỹ phẩm hàng đầu Việt Nam Mỹ phẩm hàng đầu Việt Nam Mỹ phẩm hàng đầu Việt Nam chăm sóc làn da chuyên nghiệp.
            </Typography>
          </Grid>

          <Grid xs={11} sm={6} container item wrap="nowrap" alignItems={'center'} justifyContent={'center'} marginTop={4}>
            {bannerSm()}

          </Grid>
        </Grid>

        <style jsx>{`
          .line_left {
            border: rgba(97, 103, 122, 0.8) solid 2px;
            background-color: rgba(97, 103, 122, 0.8);
            width: calc(24vw + 20px);
            height: 4px;
            display: inline-block;
            border-radius: 10px 0 0 10px;
          }
          .line_right {
            border: rgba(97, 103, 122, 0.8) solid 2px;
            background-color: rgba(97, 103, 122, 0.8);
            width: calc(24vw + 20px);
            height: 4px;
            display: inline-block;
            border-radius: 0 10px 10px 0;
          }
        `}
        </style>
      
    </>
  )
}