import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import WareHousesPage from "./Components/WareHousesPage.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<WareHousesPage />} />
          {/* <Route path="/inventories" element={<InventoriesPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
