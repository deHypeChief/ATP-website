import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./libs/styles/global.css"
import App from './routes/layout'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)

