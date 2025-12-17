import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'   // ✅ 必须有
import ChatSDK from "./components/ChatSDK";
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
      <Toaster />
      <ChatSDK />
  </HashRouter>
)
