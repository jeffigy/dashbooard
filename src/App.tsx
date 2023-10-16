import { Route, Routes } from "react-router-dom";
import Cart from "./pages/cart";
import Customers from "./pages/customers";
import Dashboard from "./pages/dashboard";
import Orders from "./pages/orders";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </>
  );
}

export default App;
