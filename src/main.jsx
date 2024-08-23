/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import Store from "./Store/store.js";
import App from './App.jsx'
import './tailwind.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
  </Provider> 
)
