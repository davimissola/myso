import './App.css'
import { Footer } from './components/Footer'
import { Funcionamento } from './components/Funcionamento'
import Header from './components/Header'
import Hero from './components/Hero'
import { Problema } from './components/Problema'



function App() {
  return (
    <>
      <Header />
      <Hero />
      <Problema />
      <Funcionamento />
      <Footer />
    </>
  )
}

export default App
