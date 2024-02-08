import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import WarehousesPage from "./Pages/WarehousePage/WareousesPage";
import EditWarehouse from "./Components/EditWarehouse/EditWarehouse";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        {/* <EditWarehouse /> */}
        <div className="app__content">
          <Routes>
            <Route path="/" element={<WarehousesPage />} />
            <Route path="/edit-warehouse/:id" element={<EditWarehouse />} />
            {/* <Route path="/inventories" element={<InventoriesPage />} /> */}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
