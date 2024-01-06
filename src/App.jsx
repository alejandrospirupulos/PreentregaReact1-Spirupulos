// import './App.css'
import { useState } from 'react'
import Itemlistcontainer from './components/Itemslistcontainer/Itemlistcontainer';
import Navbar from './components/Navbar/Navbar';
import './components/style/styles.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import CartView from './components/CartView/CartView';
import { UserProvider } from './components/ItemDetail/UserContext';





function App() {


  const [user,setUser] = useState ()

  return (
        

        <UserProvider>
        <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/cart" element={ <CartView/>}/>
            <Route path="/" element={<Itemlistcontainer />} />
            <Route path="/productos/:categoriaId/" element={<Itemlistcontainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
        </CartProvider>
        </UserProvider>
        
       
    
  )
}
export default App;

