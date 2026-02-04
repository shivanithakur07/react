import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Temp from './components/temp.jsx'
import Primary from './components/Primary.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)