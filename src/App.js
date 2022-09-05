import Product from './components/Product';
import {CssBaseline} from '@mui/material';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme) => ({

  root: {

    minHeight: '100vh',
    backgroundColor: 'hsl(30, 38%, 92%)',
    display: 'grid',
    placeItems: 'center',
  },
}))

function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <Product
        title = "Gabrielle Essence Eau De Parfum"
        description = "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
        updatePrice = "149.99"
        oldPrice = "169.99"/>
    </div>
  );
}

export default App;
