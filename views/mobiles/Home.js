import { Grid, Paper, Slide, Typography, Button, Box } from "@mui/material";
import Image from 'next/image'
import { useRef } from 'react'

export default function HomeMobileView() {
  const bannerList = [
    '/banner/banner1.jpg',
    '/banner/banner2.jpg',
    '/banner/banner3.jpg'
  ]
  const containerRef = useRef(null);
  return (
    <>
      <Grid container fluid justifyContent={"center"} alignItems={"center"}>
          <Paper ref={containerRef} sx={{ overflow: "hidden" }}>
            <Grid container direction="column" spacing={2}>
              <Grid container item>
                <Slide
                  direction="left"
                  container={containerRef.current}
                  mountOnEnter
                  unmountOnExit
                >
                  <Box
                    sx={{
                      position: "absolute",
                      width: 380,
                      height: 160,
                      bgcolor: "pink"
                    }}
                  >
                    <Button onClick={() => setIsPink(false)}>show aquamarine</Button>
                  </Box>
                </Slide>
                <Slide
                  direction="right"
                  container={containerRef.current}
                  mountOnEnter
                  unmountOnExit
                >
                  <Box
                    sx={{
                      position: "absolute",
                      width: 150,
                      height: 150,
                      bgcolor: "aquamarine"
                    }}
                  >
                    <Button onClick={() => setIsPink(true)}>show pink</Button>
                  </Box>
                </Slide>
              </Grid>
            </Grid>
          </Paper>
      </Grid>

    </>
  )
}