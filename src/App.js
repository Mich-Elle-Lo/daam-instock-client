import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header/Header";
import Add from "./Components/AddNewWarehouse/Add";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Add />
        {/* <Routes>
          <Route path="/" element={<WareHousesPage />} />
          <Route path="/inventories" element={<InventoriesPage />} />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
