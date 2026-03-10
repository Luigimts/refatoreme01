import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header/Header'
import Principal from './components/Principal/Principal'
import Footer from './components/footer/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Principal/>
    <Footer/>

  </StrictMode>
)