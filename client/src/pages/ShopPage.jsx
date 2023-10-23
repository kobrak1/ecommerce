import CampaignSingle from "../components/CampaignSingle/CampaignSingle"
import Categories from "../components/Categories/Categories"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Products from "../components/Products/Products"

const ShopPage = () => {
  return (
    <>
      <Header />
      <Categories />
      <Products />
      <CampaignSingle />
      <Products />
      <Footer />
    </>
  )
}

export default ShopPage
