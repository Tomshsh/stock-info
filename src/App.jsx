import './App.css';
import { createMuiTheme, responsiveFontSizes, makeStyles, ThemeProvider, CssBaseline } from '@material-ui/core';
import { Header } from './components/header/Header';
import Home from './pages/Home/Home'


let theme = createMuiTheme({
  palette: {
    primary: { main: '#ffffff' },
    background: { default: '#f8f9fc' },
    text: { secondary: 'rgb(0,0,0,0.4)' }
    //divider: '#addced'
  },
  typography: {
    // allVariants: { color: "#ffffff" },
    'subtitle1': { fontSize: 17, color: 'rgb(0,0,0,0.8)' },
    'subtitle2': { color: 'rgb(0,0,0,0.8)' },
    caption: { fontSize: 15, color: 'rgb(0,0,0,0.5)', fontWeight: 600, textTransform: 'uppercase' },
    h1: { fontSize: 80, fontWeight: 'bold' },
    h3: { fontWeight: 'bold' },
    h4: { fontWeight: 'bold' },
    h5: { fontWeight: 'bold' }

  },
})

theme = responsiveFontSizes(theme)

const useStyles = makeStyles(theme => ({
  app: {
    height: '100%'
  }
}))


function App() {

  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div className={classes.app}>
          <Header title="Stock Info"/>
          <Home></Home>
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
