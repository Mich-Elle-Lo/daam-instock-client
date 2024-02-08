import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import InventoriesPage from "./Pages/InventoriesPage/InventoriesPage";
// import WarehousesPage from "./Pages/WarehousePage/WareousesPage";
// import WarehouseModal from "./Components/Modal/WarehouseModal";
// import EditWarehouse from "./Components/EditWarehouse/EditWarehouse";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<WarehousesPage />} /> */}
          {/* <WarehouseModal /> */}
          <Route path="/" element={<InventoriesPage />} />
          {/* <EditWarehouse /> */}
          {/* <Route path="/edit-warehouse/:id" element={<EditWarehouse />} /> */}
          {/* <Route path="/inventories" element={<InventoriesPage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
