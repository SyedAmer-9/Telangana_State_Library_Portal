import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // ✅ Correct path & case
//import App from './useRef/App.jsx' // ✅ Correct path & case
import App from './App.jsx'
//import './useContext/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>

      <App />
  </StrictMode>
 
)
