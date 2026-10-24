import { stores } from './api/store.ts'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './ui/App.tsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <Provider store={stores}>
    <App />
  </Provider>
)
