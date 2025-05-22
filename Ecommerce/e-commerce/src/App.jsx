import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Login from './Login'
import About from './About'
import Home from './Home'
import Mainhome from './Mainhome'
import AddProducts from './AddProducts'
import Products from './Products'
import Orders from './Orders'
import WishList from './WishLists'
import Query from './Query'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Mainhome' element={<Mainhome/>}></Route>
      <Route path='/AddProducts' element={<AddProducts/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/orders' element={<Orders/>}></Route>
      <Route path='/wishlist' element={<WishList/>}></Route>
      <Route path='/query' element={<Query/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
