import React from 'react';
import { render } from 'react-dom';

import App from './app/App';


const Root = () => (
    <App />
)

render(<Root />, document.querySelector('#react-root'));