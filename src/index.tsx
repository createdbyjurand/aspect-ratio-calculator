import '@fontsource/fira-code';
import '@fontsource/roboto';
import { consoleLogo } from '@io/consts';
import { GlobalContextProvider } from '@io/contexts';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import RoutingPage from 'pages/RoutingPage';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import './index.scss';
import reportWebVitals from './reportWebVitals';
consoleLogo();

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <RoutingPage />
        </ThemeProvider>
      </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
