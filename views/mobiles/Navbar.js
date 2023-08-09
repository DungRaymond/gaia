import * as React from 'react';
import { Button, Grid, Typography } from "@mui/material"
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from 'next/image';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router'


export default function NavbarMobileView() {
  const router = useRouter()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

  return(
    <>
      <Grid container spacing={0} alignContent={"center"} alignItems="center" justifyContent="space-between" sx={{
        marginTop: '3px'
      }}>
    
        <Grid container item xs={1} justifyContent={"center"} >
          <button href={''} onClick={(e) => {
            e.preventDefault();
            handleOpen();
          }}>
            <MenuIcon sx={{fontSize: '2em'}}>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
              </Box>
            </Modal>

            </MenuIcon>
          </button>
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
              <ShoppingCartIcon sx={{fontSize: '2em'}}>

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
