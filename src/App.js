import React, { Component, useState } from 'react';
import {
  Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import history from './history';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppContainerElem from './Components/AppContainerElem';

import MyApp from './Views/MyApp/';

const Menu = {
  MenuNavBar: [
    { text: "", link: "", href: "", icon: "" }
  ],
  MenuSideBarSup: [
    { text: "Home", link: "/home", href: "", icon: "dashboard" },
  ],
  MenuSideBarInf: [
    { text: "Documentation", link: "", href: "https://github.com/Doncassino/predicting-concrete-compressive-strength", icon: "chrome_reader_mode" }
  ]
};

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            // light: will be calculated from palette.primary.main,
            main: '#000000',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
          },
          secondary: {
            //light: '#0066ff',
            main: '#ff0000',
            // dark: will be calculated from palette.secondary.main,
            //contrastText: '#ffcc00',
          },
        },
      }),
    [prefersDarkMode],
  );
  
  
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <AppContainerElem
          title="Predict Concrete Compressive Strength"
          menu={Menu}
        >
          <Switch>
            <Route exact path="/" component={MyApp} />
            <Route exact path="/home" component={MyApp} />
          </Switch>
        </AppContainerElem>
      </Router>
    </ThemeProvider>
  );
};

export default App;
