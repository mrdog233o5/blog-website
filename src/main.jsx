import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './navbar.jsx'
import Title from './title.jsx'
import './style.css'

ReactDOM.createRoot(document.getElementById('navbar')).render(
    <React.StrictMode>
        <Nav />
    </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('title')).render(
    <React.StrictMode>
        <Title />
    </React.StrictMode>,
)