import './App.css'
import { I18nextProvider } from 'react-i18next'
import i18nCustom from './i18next'
import { BrowserRouter, Routes } from 'react-router-dom'

function App() {
  return (
    <I18nextProvider i18n={i18nCustom} >
      <BrowserRouter>
        <Routes>
          
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  )
}

export default App
