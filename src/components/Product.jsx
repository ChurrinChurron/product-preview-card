import React from 'react';
import {makeStyles} from '@mui/styles';
import {Box, Button, createTheme, Hidden, ThemeProvider, Grid, Typography} from '@mui/material';
import perfumeMovil from '../assets/image-product-mobile.jpg';
import perfumeDesk from '../assets/image-product-desktop.jpg';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

const theme = createTheme({

  palette: {

      primary: {

          main: 'hsl(158, 36%, 37%)'
      },
  },

  typography: {

    fontFamily: "Montserrat, sans-serif",
  
    button: {

      textTransform: "none",
    },
  },

});

const useStyles = makeStyles((theme) => ({

  box: {

    margin: '1.1em',
    "@media (min-width: 600px)": {

      width: "37em"
    },
  },

  grid: {

    display: 'grid',
  },

  imgMob: {

    width: '100%',
    borderRadius: '10px 10px 0 0',
  },

  imgDesk: {

    width: '100%',
    borderRadius: '10px 0 0 10px',
  },

  info: {

    backgroundColor: 'hsl(0, 0%, 100%)',
    padding: '1.2em 1.4em',
    borderRadius: '0 0 10px 10px',
    "@media (min-width: 600px)": {

      borderRadius: '0 10px 10px 0',
    },
    
  },

  price: {

    display: 'flex',
    alignItems: 'center',
  
  },

  button: {

    width: '100%',

  },
}))

function Product(props) {

  const classes = useStyles();

  return (
    <section className={classes.box}>
      <Grid container>
        <Hidden smUp>
          <Grid item xs={12} className={classes.grid}>
            <img src={perfumeMovil} alt="perfume" className={classes.imgMob}/>
          </Grid>
        </Hidden>
        <Hidden smDown>
          <Grid item xs={12} sm={6} className={classes.grid}>
            <img src={perfumeDesk} alt="perfume" className={classes.imgDesk}/>
          </Grid> 
        </Hidden>
        <Grid item xs={12} sm={6} className={classes.info}>
          <Typography variant="subtitle2" style={{fontFamily: 'Montserrat', color: 'hsl(228, 12%, 48%)', letterSpacing: '5px'}}>PERFUME</Typography>
          <Typography variant="h4" style={{fontFamily: 'Fraunces', color: 'hsl(212, 21%, 14%)', fontWeight: '700', margin: '0.4em 0'}}>{props.title}</Typography>
          <Typography variant="body2" style={{fontFamily: 'Montserrat', color: 'hsl(228, 12%, 48%)', marginBottom: '1.2em'}}>{props.description}</Typography>
          <div className={classes.price}>
            <Typography variant="h4" style={{fontFamily: 'Fraunces', color: 'hsl(158, 36%, 37%)', fontWeight: '700'}}>${props.updatePrice}</Typography>
            <Typography variant="body2" style={{fontFamily: 'Montserrat', color: 'hsl(228, 12%, 48%)', textDecoration: 'line-through', marginLeft: '1.8em'}}>${props.oldPrice}</Typography>
          </div>
          <ThemeProvider theme={theme}>
            <Box mt={2} mb={1}>
              <Button variant="contained" color="primary" startIcon={<ShoppingCart/>} className={classes.button} style={{padding: "1.1em 0"}}>
                <Typography variant="body2">Add to Cart</Typography>
              </Button>
            </Box>
          </ThemeProvider>
        </Grid>
      </Grid>
    </section>
  );
}

export default Product;