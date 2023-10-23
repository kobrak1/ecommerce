import './App.css'
//components
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ContactPage from './pages/ContactPage'
import AuthPage from './pages/AuthPage'
import CartPage from './pages/CartPage'
import BlogPage from './pages/BlogPage'

const App = () => {
  return (
    <>
      <HomePage />
      <ShopPage />
      <ContactPage />
      <AuthPage />
      <CartPage />
      <BlogPage />
    </>
  )
}

export default App
