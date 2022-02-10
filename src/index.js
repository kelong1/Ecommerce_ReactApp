import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Context from './Context/Context';


ReactDOM.render(
<Context>
<App />
</Context>,
document.getElementById('root'));


