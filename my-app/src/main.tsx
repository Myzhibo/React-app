import React from 'react'
import ReactDOM from 'react-dom/client'

//resetCss放最前面
import "reset-css"
//css
import "./assets/styles/global.scss"
//组件
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
