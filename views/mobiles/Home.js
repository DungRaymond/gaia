import { Grid, Paper, Slide, Typography, Button, Box } from "@mui/material";
import Image from 'next/image'
import { useRef, useState, useCallback } from 'react'

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
      

        <Box 
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
      
    </>
  )
}