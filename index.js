import injectTapEventPlugin from 'react-tap-event-plugin'  
injectTapEventPlugin();


import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './app';

ReactDOM.render(
	<MuiThemeProvider>
		<App />
	</MuiThemeProvider>,
	document.getElementById('root')
);