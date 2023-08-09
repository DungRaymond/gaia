import * as React from 'react';
import { Button, Grid, Typography, Accordion } from "@mui/material"
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from 'next/image';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router'
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';


export default function NavbarMobileView() {
  const router = useRouter()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: `calc(60vw)`,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };
  

  return(
    <>
      <Grid container spacing={0} alignContent={"center"} alignItems="center" justifyContent="space-between" sx={{
        marginTop: '3px'
      }}>
    
        <Grid container item xs={1} justifyContent={"center"} >
          <button onClick={(e) => {
            e.preventDefault();
            handleOpen();
          }}>
            <MenuIcon sx={{fontSize: '32px', paddingLeft: '6px'}}>

            </MenuIcon>
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Grid container direction={'column'} alignItems={'flex-start'}>
                  <MenuButton href="/" router={router}>
                    <span>
                      Trang chủ
                    </span>
                  </MenuButton>

                  <MenuButton href="/about" router={router}>
                    Giới Thiệu
                  </MenuButton>

                </Grid>


                

              </Box>

            </Fade>
          </Modal>
        </Grid>


        <Grid container item spacing={0} xs={2} id="navbar-mobile-logo" justifyContent={"center"} alignItems={'flex-end'} >
          {/* <Grid item  */}
          <button onClick={(e) => {
            e.preventDefault();
            router.push('/')
          }}>
            
            <Image width={124} height={46} style={{padding: 'auto 0'}} alt='navbar-logo' src={"/logo-teal.png"} />
          </button>
        </Grid>


        <Grid container item xs={1} justifyContent={"center"}>
          <button onClick={(e) => {
            e.preventDefault();
            router.push('/cart')
          }}>
              <ShoppingCartIcon sx={{fontSize: '32px', paddingRight: '4px'}}>

              </ShoppingCartIcon>
          </button>
        </Grid>


      </Grid>


      <style jsx>{`
        #navbar-mobile-logo {
          
        }

        button {
          outline: none;
          background-color: transparent;
          border: none;
          color: #35155D;
          display: flex;
          justify-self: center;
        }
      
      `}
      </style>
    </>
  )
}

function MenuButton (props) {
  return (
    <button className='menubtn' onClick={(event) => {
      event.preventDefault();
      props.router.push(props.href)
    }}>
      {props.children}
      <style jsx>{`
        .menubtn {
          color: #35155D;
          background-color: transparent;
          outline: none;
          border: none;
          font-weight: 600;
          font-size: 2rem;
        }

      `}</style>
    </button>
  )
}