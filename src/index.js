import React from 'react';
import { render } from 'react-dom';

import App from './app/App';

import 'semantic-ui-css/semantic.css'

const Root = () => (
    <App />
)

render(<Root />, document.querySelector('#react-root'));
