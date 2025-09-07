import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ThemeProvider} from "./Context/ThemeProvider.jsx";
import { UIProvider } from './Context/UIProvider.jsx';

createRoot(document.getElementById('root')).render(

    <ThemeProvider>
        <UIProvider>
            <App />
        </UIProvider>
    </ThemeProvider>
)
