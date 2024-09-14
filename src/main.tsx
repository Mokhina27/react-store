import { createRoot } from 'react-dom/client'
import './Scss/main.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient({})

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={client}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)

