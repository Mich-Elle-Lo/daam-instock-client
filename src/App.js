import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import WarehousesPage from "./Pages/WarehousePage/WareousesPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<WarehousesPage />} />
          {/* <Route path="/inventories" element={<InventoriesPage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
