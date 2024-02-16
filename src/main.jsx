import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppContext } from './AppContext'
import { ProvedorDefiltros } from './context/filtros.jsx'
import { ContextoProvedor } from './context/compras.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextoProvedor>
      <ProvedorDefiltros>
        <AppContext/>
      </ProvedorDefiltros>
    </ContextoProvedor>
  </React.StrictMode>,
)
