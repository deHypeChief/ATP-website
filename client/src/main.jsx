import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./libs/styles/global.css"
import App from './routes/layout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


