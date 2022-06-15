import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Auth from "./Components/Auth/Auth";
import Shop from "./pages/Shop/Shop";
import Navigation from "./Components/home/Navigation";
import BookAppointments from "./pages/BookAppointment/BookAppointment.js";
import Cart from "./pages/Cart/Cart";
import Orders from "./pages/Orders/Orders";
import FileNotFound from "./pages/FileNotFound/FileNotFound";
import Contact from "./pages/Contact/Contact";
import SalesManagement from "./Components/Admin/SalesManagement/SalesManagement";
import Products from "./pages/Shop/Products/Products";
import ProductDetails from "./pages/Shop/ProductDetails/ProductDetails";
import Admin from "./Components/Admin/Management/Management";
import CategoriesInventory from "./Components/Admin/CategoriesInventory/CategoriesInventory";
import ProductsInventory from "./Components/Admin/ProductsInventory/ProductsInventory";
import AddCategoryForm from "./Components/Admin/AddCategoryForm/AddCategoryForm";
import AddProductForm from "./Components/Admin/AddProductForm/AddProductForm";
import AuthContext from "./Context/AuthContext/AuthContext";
import AdminContext from "./Context/AdminContext/AdminContext";
import Checkout from "./pages/Checkout/Checkout";
import { CatelogueProvider } from "./Context/CatelogueContext/CatelogueContext";
import UpdateCategoryForm from "./Components/Admin/UpdateCategoryForm/UpdateCategoryForm";
import UpdateProductForm from "./Components/Admin/UpdateProductForm/UpdateProductForm";
import SalesData from "./Components/Admin/SalesData/SalesData";
import { SalesProvider } from "./Context/SalesContext/SalesContext";
function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [adminToken, setAdminToken] = useState(
    localStorage.getItem("adminToken")
  );

  const providerValue = {
    token,
    setToken,
  };
  const adminProviderValue = {
    adminToken,
    setAdminToken,
  };
  function HomePage() {
    return <Navigate replace to="home" />;
  }

  let approutes;
  if (adminToken) {
    approutes = (
      <Routes>
        <Route path="/" element={HomePage()} />
        <Route path="home" element={<Home />} />
        <Route path="browse">
          <Route index={true} element={<Shop />} />
          <Route path="category/:id" element={<Products />} />
          <Route
            path="category/:id/product/:productid"
            element={<ProductDetails />}
          />
        </Route>
        <Route path="checkout">
          <Route index={true} element={HomePage()} />
          <Route path=":cartID" element={<Checkout />} />
        </Route>
        <Route path="admin">
          <Route index={true} element={<Admin />} />
          <Route path="sales" element={<SalesManagement />} />
          <Route path="salesdata" element={<SalesData />} />
          <Route path="category" element={<CategoriesInventory />} />
          <Route path="category/add" element={<AddCategoryForm />} />
          <Route path="category/update/:id" element={<UpdateCategoryForm />} />
          <Route path="category/:id" element={<ProductsInventory />} />
          <Route path="category/:id/add-product" element={<AddProductForm />} />
          <Route
            path="category/:id/update-product/:productid"
            element={<UpdateProductForm />}
          />
        </Route>
        <Route path="appointment" element={<BookAppointments />} />

        <Route path="auth" element={<Auth />} />
        <Route path="cart" element={<Cart />} />
        <Route path="orders" element={<Orders />} />
        <Route path="*" element={<FileNotFound />} />
      </Routes>
    );
  } else {
    approutes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="browse">
          <Route index={true} element={<Shop />} />
          <Route path="sunglasses" element={<Shop />} />
          <Route path="eyewear" element={<Shop />} />
          <Route path="lenses" element={<Shop />} />

          <Route path="category/:id" element={<Products />} />
          <Route
            path="category/:id/product/:productid"
            element={<ProductDetails />}
          />

          <Route path="sunglasses/category/:id" element={<Products />} />
          <Route path="eyewear/category/:id" element={<Products />} />
          <Route path="lenses/category/:id" element={<Products />} />
          <Route
            path="sunglasses/category/:id/product/:productid"
            element={<ProductDetails />}
          />
          <Route
            path="eyewear/category/:id/product/:productid"
            element={<ProductDetails />}
          />
          <Route
            path="lenses/category/:id/product/:productid"
            element={<ProductDetails />}
          />
        </Route>
        <Route path="checkout">
          <Route index={true} element={HomePage()} />
          <Route path=":cartID" element={<Checkout />} />
        </Route>
        <Route path="appointment" element={<BookAppointments />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="orders" element={<Orders />} />
        <Route path="auth" element={<Auth />} />
        <Route path="*" element={<FileNotFound />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider value={providerValue}>
      <AdminContext.Provider value={adminProviderValue}>
        <CatelogueProvider>
          <SalesProvider>
            <BrowserRouter>
              <Navigation />
              {approutes}
            </BrowserRouter>
          </SalesProvider>
        </CatelogueProvider>
      </AdminContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
