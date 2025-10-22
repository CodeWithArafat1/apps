import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppContexts from './contexts/AppContexts.jsx'
import 'flowbite';
import AppRoutes from './routes/AppRoutes.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContexts>
      <AppRoutes/>
    </AppContexts>
  </StrictMode>,
)
