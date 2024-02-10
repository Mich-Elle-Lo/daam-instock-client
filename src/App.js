import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import InventoriesPage from "./Pages/InventoriesPage/InventoriesPage";
import WarehousesPage from "./Pages/WarehousePage/WarehousesPage";
import EditWarehouse from "./Pages/EditWarehouse/EditWarehouse";
import EditInventory from "./Pages/EditInventory/EditInventory";
import AddInventory from "./Pages/AddInventory/AddInventory";
import WarehouseDetails from "./Pages/WarehouseDetails/WarehouseDetails";
import AddWarehouse from "./Pages/AddWarehouse/AddWarehouse";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <section className="app__content">
          <Routes>
            <Route path="/" element={<WarehousesPage />} />
            <Route path="/warehouse/:id" element={<WarehouseDetails />} />
            <Route path="/edit-warehouse/:id" element={<EditWarehouse />} />
            <Route path="/inventories" element={<InventoriesPage />} />
            <Route path="/inventories/edit/:id" element={<EditInventory />} />
            <Route path="/inventories/add" element={<AddInventory />} />
            <Route path="/warehouse/add" element={<AddWarehouse />} />
            <Route path="/Inventories/:id" element={<InventoryItemDetails />} />
          </Routes>
        </section>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
