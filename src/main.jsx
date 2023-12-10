import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './navbar.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('navbar')).render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>,
)