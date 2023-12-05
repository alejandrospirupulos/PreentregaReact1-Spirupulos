// import './App.css'
import { useState } from 'react'
import Itemlistcontainer from './components/Itemslistcontainer/Itemlistcontainer'
import Navbar from './components/Navbar/Navbar'
import './components/style/styles.scss'
import Carwidget from './components/carWidget/Carwidget'


function App () {
  return (
    <>
    <Navbar/>
    <Itemlistcontainer greeting = "hola soy una prop"/>
    </>
  )
}
export default App

