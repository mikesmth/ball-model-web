import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './router'

const root = createRoot(document.getElementById('root')!)

root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
