import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ConfigProvider } from './context/config_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ConfigProvider >
        <App />
    </ConfigProvider>
);