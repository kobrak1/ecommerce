import './App.css'
import { Route, Routes } from 'react-router-dom'
//PAGES
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ContactPage from './pages/ContactPage'
import AuthPage from './pages/AuthPage'
import CartPage from './pages/CartPage'
import BlogPage from './pages/BlogPage'
import BlogDetailsPage from './pages/BlogDetailsPage'
import ProductDetailsPage from './pages/ProductDetailsPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/shop' element={<ShopPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/auth' element={<AuthPage />} />
      <Route path='/blog' element={<BlogPage />} />
      <Route path='/productdetails/:id' element={<ProductDetailsPage />} />
      <Route path='/blogdetails/:id' element={<BlogDetailsPage />} />
    </Routes>
  )
}

export default App
