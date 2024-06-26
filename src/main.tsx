import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './css/index.css'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <BrowserRouter>
  {/* // <BrowserRouter basename="/GenShortcuts"> */}
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
