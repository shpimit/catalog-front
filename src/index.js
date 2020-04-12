import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Navigation from './layout/Navigation';
// import { BrowserRouter as Router } from "react-router-dom";
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: '"Noto Sans KR", serif',
    },
});

// ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
ReactDOM.render(<createMuiTheme><App /></createMuiTheme>, document.getElementById('root'));
// ReactDOM.render(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, document.getElementById('root'));
