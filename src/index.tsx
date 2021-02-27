//other import
import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
//my components
import {App} from './components/App';

ReactDOM.render(
    <StrictMode>
        <App/>
    </StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
