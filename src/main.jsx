import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"

const rootDiv = document.getElementById("root");
createRoot(rootDiv).render(<App />)