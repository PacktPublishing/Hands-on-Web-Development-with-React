import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StyledComponents from './StyledComponents';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<StyledComponents />, document.getElementById('root'));
registerServiceWorker();
