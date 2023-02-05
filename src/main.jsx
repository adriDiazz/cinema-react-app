import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';

const app = <App />;
const container = document.getElementById('root');

createRoot(container).render(app);
