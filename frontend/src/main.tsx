import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from './AppRoutes';
import Auth0ProviderWIthNavigate from './auth/Auth0ProviderWIthNavigate';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWIthNavigate>
        <AppRoutes/>
      </Auth0ProviderWIthNavigate>
    </Router>
  </React.StrictMode>,
)
