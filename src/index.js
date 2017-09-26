import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


//select book is an action creator, it will need an action type
export function selectBook(book) {

    return {
        //You should create a Type and Payload for your Action here
    };
}
