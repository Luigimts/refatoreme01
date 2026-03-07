import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header/Header'
import Banner from './components/Principal/Banner'
import Card from './components/Principal/Card'
import Footer from './components/footer/Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Banner/>
    <Card/>
    <Footer/>

  </StrictMode>
)