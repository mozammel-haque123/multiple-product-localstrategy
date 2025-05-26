import  { Toaster } from 'react-hot-toast';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import Routes from './component/Routes/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Routes} />
   <Toaster
  position="top-center"
  reverseOrder={false}
/>
    
  </StrictMode>,
)
