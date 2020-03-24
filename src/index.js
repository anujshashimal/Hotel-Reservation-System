import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Component/Header';
import Option from './Component/Option'
import * as serviceWorker from './serviceWorker';

class Indecisionapp extends React.Component{
    render() {
        return(
            <div>
                <Header title = "anuj"/>
                <Option />

            </div>
        )
    }
}

ReactDOM.render(
    <Indecisionapp />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
