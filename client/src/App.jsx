import { Route, Routes } from 'react-router-dom'
// Style
import './App.css'
//Pages
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ContactPage from './pages/ContactPage'
import AuthPage from './pages/AuthPage'
import CartPage from './pages/CartPage'
import BlogPage from './pages/BlogPage'
import BlogDetailsPage from './pages/BlogDetailsPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import UserPage from './pages/admin/UserPage'
import CategoryPage from './pages/admin/Categories.jsx/CategoryPage'
import UpdateCategoryPage from './pages/admin/Categories.jsx/UpdateCategoryPage'
import CreateCategoryPage from './pages/admin/Categories.jsx/CreateCategoryPage'

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
      <Route path='/admin/*' >
        <Route path='users' element={<UserPage />} />
        <Route path='categories' element={ <CategoryPage /> } />
        <Route path='categories/update/:id' element={ <UpdateCategoryPage /> } />
        <Route path='categories/create' element={ <CreateCategoryPage /> } />
      </Route>
    </Routes>
  )
}

export default App
