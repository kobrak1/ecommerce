import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Policy from './components/Policy/Policy'
import Sliders from './components/Sliders/Slider'
import Categories from './components/Categories/Categories'

const App = () => {
  return (
    <div>
      <Header />
      <Sliders />
      <Categories />
      <Policy />
      <Footer />
    </div>
  )
}

export default App
