import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Layout } from "./layouts/Layout.jsx";
import CartProvider from "./context/CartProvider.jsx";
import { HashRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <CartProvider>
      <Layout>
        <App />
      </Layout>
    </CartProvider>
  </HashRouter>
);
