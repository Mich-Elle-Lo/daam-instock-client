import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import Add from "./Components/AddNewWarehouse/Add";
import Footer from "./Components/Footer/Footer";
import InventoriesPage from "./Pages/InventoriesPage/InventoriesPage";
import WarehousesPage from "./Pages/WarehousePage/WarehousesPage";
import EditWarehouse from "./Pages/EditWarehouse/EditWarehouse";
import WarehouseDetails from "./Pages/WarehouseDetails/WarehouseDetails";
import InventoryItemDetails from "./Pages/InventoryItemDetails/InventoryItemDetails";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WarehousesPage />} />
          <Route path="/edit-warehouse/:id" element={<EditWarehouse />} />
          <Route path="/warehouse/:id" element={<WarehouseDetails />} />
          <Route path="/inventories" element={<InventoriesPage />} />
          <Route path="/Inventories/:id" element={<InventoryItemDetails />} />
        </Routes>
        <Add />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
