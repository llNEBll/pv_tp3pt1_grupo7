import { useState } from 'react'
import Header from './components/Header'
import ListaProyectos from './components/ListaProyectos'
import Footer from './components/Footer'
import Nav from './components/Nav'
import './App.css'

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <ListaProyectos />
      <Footer />  
    </div>
  )
}

export default App
