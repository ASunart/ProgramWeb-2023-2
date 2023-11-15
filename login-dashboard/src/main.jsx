import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { AuthContextProvider } from './auth/context/AuthContextProvider.jsx'
import { ApiContextProvider } from './user/context/ApiContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ApiContextProvider>
          <App />
        </ApiContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
