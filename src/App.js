import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Navigation from "./Components/Navigation"
import BookAppointments from "./pages/BookAppointment/BookAppointment.js";
import MyCart from "./pages/MyCart/MyCart";
import FileNotFound from "./pages/FileNotFound/FileNotFound";
import Contact from "./pages/Contact/Contact";
import SalesManagement from './pages/SalesManagement/SalesManagement'

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='appointment' element={<BookAppointments />} />
          <Route path='sales' element={<SalesManagement />} />
          <Route path='contact' element={<Contact />} />
          <Route path='cart' element={<MyCart />} />
          <Route path='*' element={<FileNotFound/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
