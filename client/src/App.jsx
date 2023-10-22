import './App.css'
//components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Policy from './components/Policy/Policy'
import Sliders from './components/Sliders/Slider'
import Categories from './components/Categories/Categories'
import Products from './components/Products/Products'
import Campaigns from './components/Campaigns/Campaigns'
import Blogs from './components/Blogs/Blogs'
import Brands from './components/Brands/Brands'

const App = () => {
  return (
    <div>
      <Header />
      <Sliders />
      <Categories />
      <Products />
      <Campaigns />
      <Blogs />
      <Brands />
      <Policy />
      <Footer />
    </div>
  )
}

export default App
