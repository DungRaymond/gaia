import { Grid, Paper, Slide, Typography, Button, Box } from "@mui/material";
import Image from 'next/image'
import { useRef, useState } from 'react'

export default function HomeMobileView() {
  const bannerList = [
    '/banner/banner1.jpg',
    '/banner/banner2.jpg',
    '/banner/banner3.jpg'
  ]
  const containerRef = useRef(null);

  const banner = (bpath) => {
    return (
      <Paper sx={{ m: 1 }} elevation={4}>
        <Box sx={{
            width: `calc(100vw - 6px)`,
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

  const [slide1, setSlide1] = useState(true);
  const [slide2, setSlide2] = useState(false);
  const [slide3, setSlide3] = useState(false);
  const [bannerPath, setBannerPath] = useState(bannerList[0])
  return (
    <>
      

        <Box ref={containerRef} sx={{
            width: `calc(100vw)`,
            height: `calc(100vw/2)`,
            position: 'relative',
            display: 'flex',
            overflow: 'hidden',
            justifyContent: 'center'
        }}>
          <Slide direction="right" in={slide1} mountOnEnter container={containerRef.current} unmountOnExit addEndListener={() => {
            setTimeout(() => {
              
                setSlide1(!slide1);
                setSlide2(!slide2);

            }, 2000);
          }}>
              {banner(0)}
          </Slide>
          <Slide direction="right" in={slide2} mountOnEnter container={containerRef.current} unmountOnExit addEndListener={() => {
            setTimeout(() => {
                setSlide2(!slide2)
                setSlide3(!slide3)

            }, 2000);
          }}>
              {banner(1)}
          </Slide>
          {/* <Slide direction="left" in={slide3} mountOnEnter unmountOnExit addEndListener={() => {
            setTimeout(() => {
                setSlide3(!slide3)
                setSlide1(!slide1)

            }, 2000);
          }}>
              {banner(2)}
          </Slide> */}

        </Box>
      
    </>
  )
}