import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './routing/routing';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <App /> */}
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>,
)
