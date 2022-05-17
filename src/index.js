import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { LangProvider } from './assets/contex/langContex';

ReactDOM.render(
    <LangProvider>
        <App/>
    </LangProvider>
    ,document.querySelector('#root'));