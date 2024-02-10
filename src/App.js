import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import InventoriesPage from "./Pages/InventoriesPage/InventoriesPage";
import WarehousesPage from "./Pages/WarehousePage/WarehousesPage";
import EditWarehouse from "./Pages/EditWarehouse/EditWarehouse";
import EditInventory from "./Pages/EditInventory/EditInventory";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <section className="app__content">
          <Routes>
            <Route path="/" element={<WarehousesPage />} />
            <Route path="/edit-warehouse/:id" element={<EditWarehouse />} />
            <Route path="/inventories" element={<InventoriesPage />} />
            <Route path="/inventories/edit/:id" element={<EditInventory />} />
          </Routes>
        </section>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
