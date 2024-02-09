import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import InventoriesPage from "./Pages/InventoriesPage/InventoriesPage";
import WarehousesPage from "./Pages/WarehousePage/WarehousesPage";
// import WarehouseModal from "./Components/Modal/WarehouseModal";
import EditWarehouse from "./Components/EditWarehouse/EditWarehouse";
import InventoryItemDetails from "./Pages/InventoryItemDetails/InventoryItemDetails";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WarehousesPage />} />
          <Route path="/edit-warehouse/:id" element={<EditWarehouse />} />
          <Route path="/inventories" element={<InventoriesPage />} />
          <Route path="/Inventories/:id" element={<InventoryItemDetails />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
