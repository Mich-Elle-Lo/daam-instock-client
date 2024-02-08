import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import WarehousesPage from "./Pages/WarehousePage/WareousesPage";
import WarehouseModal from "./Components/Modal/WarehouseModal";
import EditWarehouse from "./Components/EditWarehouse/EditWarehouse";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <EditWarehouse /> */}
        <WarehouseModal />
        <Routes>
          <Route path="/" element={<WarehousesPage />} />
          <Route path="/edit-warehouse/:id" element={<EditWarehouse />} />
          {/* <Route path="/inventories" element={<InventoriesPage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
