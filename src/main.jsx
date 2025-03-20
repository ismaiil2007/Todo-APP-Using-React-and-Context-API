

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router'
import { TodosContextProvider } from './context/TodosContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <TodosContextProvider>
 
 <App></App>
      </TodosContextProvider>
  </BrowserRouter>

    // <RouterProvider router={router} />
)

// // =============================================
