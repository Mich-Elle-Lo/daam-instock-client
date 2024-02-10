import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import InventoriesPage from "./Pages/InventoriesPage/InventoriesPage";
import WarehousesPage from "./Pages/WarehousePage/WarehousesPage";
<<<<<<< HEAD

import EditWarehouse from "./Pages/EditWarehouse/EditWarehouse";
import WarehouseDetails from "./Pages/WarehouseDetails/WarehouseDetails";
import InventoryItemDetails from "./Pages/InventoryItemDetails/InventoryItemDetails";
=======
import EditWarehouse from "./Pages/EditWarehouse/EditWarehouse";
import EditInventory from "./Pages/EditInventory/EditInventory";
>>>>>>> develop

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
          </Routes>
        </section>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
