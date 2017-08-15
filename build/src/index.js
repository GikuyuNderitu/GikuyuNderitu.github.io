import React from 'react';
import { render } from 'react-dom';

import App from './app/App';

import 'semantic-ui-css/semantic.css'

import swUrl from 'file-loader!./sw'


if('serviceWorker' in navigator) {
    navigator.serviceWorker.register(swUrl)
    .then(reg => {
        console.log(`Successful sw registration ${reg}`);
    })
    .catch( err => {
        console.error(`Error registering service worker ${err}`);
    })
}

console.log(/^sw\.js/.test('sw.js'));

const Root = () => (
    <App />
)

render(<Root />, document.querySelector('#react-root'));
