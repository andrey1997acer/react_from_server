import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app';

const app = <App users={window.__data__} />;

ReactDom.hydrate(app, document.getElementById('root'));
