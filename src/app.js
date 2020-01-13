import { h, Component, render } from '/web_modules/preact.js';
// Create your app
const app = h('div', null, 'Hello World!');
// Inject your application into the an element with the id `app`.
render(app, document.getElementById('app'));
