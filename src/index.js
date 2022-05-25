import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { LangProvider } from './assets/contex/langContex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LangProvider>
        <App/>
    </LangProvider>
);