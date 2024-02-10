import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import Add from "./Components/AddNewWarehouse/Add";
import Footer from "./Components/Footer/Footer";
// import InventoriesPage from "./Pages/InventoriesPage/InventoriesPage";
import WarehousesPage from "./Pages/WarehousePage/WarehousesPage";

// import EditWarehouse from "./Components/EditWarehouse/EditWarehouse";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="app__content">
          <Routes>
            <Route path="/" element={<WarehousesPage />} />
            {/* <Route path="/edit-warehouse/:id" element={<EditWarehouse />} /> */}
            {/* <Route path="/inventories" element={<InventoriesPage />} /> */}
          </Routes>
        </div>
        <Add />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
