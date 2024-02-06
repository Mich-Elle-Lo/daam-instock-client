import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WareHousesPage />} />
          <Route path="/inventories" element={<InventoriesPage />} />
        </Routes>
      </BrowserRouter>
      <Header />
    </div>
  );
}

export default App;
