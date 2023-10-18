import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Policy from './components/Policy/Policy'
import Sliders from './components/Sliders/Slider'
import Categories from './components/Categories/Categories'
import Products from './components/Products/Products'
import './App.css'

const App = () => {
  return (
    <div>
      <Header />
      <Sliders />
      <Categories />
      <Products />
      <Policy />
      <Footer />
    </div>
  )
}

export default App
