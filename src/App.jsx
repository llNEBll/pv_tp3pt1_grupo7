import { useState } from 'react'
import Header from './components/Header'
import ListaProyectos from './components/ListaProyectos'
import Footer from './components/Footer'
import Nav from './components/Nav'
import './css/Proyectos.css'
import './css/styles.css'

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <main>
        <ListaProyectos />
      </main>
      <Footer />  
    </div>
  )
}

export default App
