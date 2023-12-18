// import './App.css'
import { useState } from 'react'
import Itemlistcontainer from './components/Itemslistcontainer/Itemlistcontainer';
import Navbar from './components/Navbar/Navbar';
import './components/style/styles.scss';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App () {
  return (
   
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Itemlistcontainer /> }/>
      <Route path="/productos/:categoriaId/" element={<Itemlistcontainer/> }/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/> }/>
    </Routes>
    </BrowserRouter>

   
  )
}
export default App

