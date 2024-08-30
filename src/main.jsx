import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import store from './Redux/Store/Store.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </HashRouter>
  </StrictMode>,
)
