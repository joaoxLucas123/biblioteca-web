import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "./styles.css";

// 👇 COLE AQUI
const script = document.createElement("script");
script.src = "https://t.contentsquare.net/uxa/03dd975b90d23.js";
script.async = true;
document.head.appendChild(script);

// 👇 NÃO MEXE DAQUI PRA BAIXO
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)