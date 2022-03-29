import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const ThemeContext = createContext([]);

ReactDOM.render(
    <ThemeContext.Provider value={[]}>
        <App/>
    </ThemeContext.Provider>,
    document.getElementById('root')
);
