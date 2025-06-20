import { createRoot } from 'react-dom/client'
import App from './assets/js/App.jsx'

document.body.style.overflowX = 'hidden';
document.body.style.backgroundColor = '#616160';

createRoot(document.getElementById('root')).render(
  <App />
)
