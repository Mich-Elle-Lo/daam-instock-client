import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./WarehousesPage.scss";
import WarehouseModal from "../../Components/Modal/WarehouseModal";
import searchIcon from "../../Assets/Icons/search-24px.svg";
import sortIcon from "../../Assets/Icons/sort-24px.svg";
import trashIcon from "../../Assets/Icons/delete_outline-24px.svg";
import editIcon from "../../Assets/Icons/edit-24px.svg";
import arrowIcon from "../../Assets/Icons/chevron_right-24px.svg";

export default function WareHousesPage() {
  const [warehouses, setWarehouses] = useState([]);
  const baseUrl = "http://localhost:8080/";

  const [showModal, setShowModal] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const navigate = useNavigate();

  const deleteWarehouse = (warehouseId) => {
    return axios
      .delete(`http://localhost:8080/api/warehouses/${warehouseId}`)
      .then((response) => {
        const updatedWarehouses = warehouses.filter(
          (warehouse) => warehouse.id !== warehouseId
        );
        setWarehouses(updatedWarehouses);
      })
      .catch((error) => {
        console.error("Error error with deletion:", error);
        throw error;
      });
  };

  const handleOpenModal = (selectedWarehouse) => {
    setSelectedWarehouse(selectedWarehouse);
    setShowModal(true);
  };

  useEffect(() => {
    const fetchWarehouses = async () => {
      try {
        const response = await axios.get(`${baseUrl}api/warehouses`);

        setWarehouses(response.data);
      } catch (error) {
        console.error("error error", error);
      }
    };
    fetchWarehouses();
  }, []);

  return (
    <section className="warehouses">
      <div className="warehouses__content">
        <WarehouseModal
          show={showModal}
          onClose={() => setShowModal(false)}
          onDelete={deleteWarehouse}
          warehouse={selectedWarehouse}
        />
        <div className="warehouses__wrapper">
          <h1 className="warehouses__title">Warehouses</h1>
          <form className="warehouses__form">
            <div className="warehouses__search">
              <input
                type="text"
                placeholder="Search"
                id="searchBar"
                className="warehouses__input"
              />
              <div className="warehouses__iconbox">
                <img
                  className="warehouses__searchicon"
                  src={searchIcon}
                  alt="search icon"
                />
              </div>
            </div>
            <button className="warehouses__button"> +Add New Warehouse</button>
          </form>
        </div>
        <div className="warehouses__options">
          <div className="warehouses__box">
            WAREHOUSE
            <img
              className="warehouses__sorticon"
              src={sortIcon}
              alt="sort icon"
            />
          </div>
          <div className="warehouses__box">
            ADDRESS
            <img
              className="warehouses__sorticon"
              src={sortIcon}
              alt="sort icon"
            />
          </div>
          <div className="warehouses__box">
            CONTACT NAME
            <img
              className="warehouses__sorticon"
              src={sortIcon}
              alt="sort icon"
            />
          </div>
          <div className="warehouses__box">
            CONTACT INFORMATION
            <img
              className="warehouses__sorticon"
              src={sortIcon}
              alt="sort icon"
            />
          </div>
          <div className="warehouses__boxflex">ACTIONS</div>
        </div>

        <div className="warehouses__list">
          {warehouses.map((warehouse) => (
            <div key={warehouse.id} className="warehouses__card">
              <div className="warehouses__details">
                <div className="warehouses__mobilebox">
                  <div className="warehouses__infobox">
                    <div className="warehouses__infotitle ">WAREHOUSE</div>
                    <div className="warehouses__data">
                      <p className="warehouses__data--highlight">
                        {warehouse.warehouse_name}
                      </p>
                    </div>
                  </div>

                  <div className="warehouses__infobox">
                    <div className="warehouses__infotitle">ADDRESS</div>
                    <div className="warehouses__data">{warehouse.address}</div>
                  </div>
                </div>
                <div className="warehouses__mobilebox">
                  <div className="warehouses__infobox">
                    <div className="warehouses__infotitle">CONTACT NAME</div>
                    <div className="warehouses__data">
                      {warehouse.contact_name}
                    </div>
                  </div>
                  <div className="warehouses__infobox">
                    <div className="warehouses__infotitle">
                      CONTACT INFORMATION
                    </div>
                    <div className="warehouses__data">
                      {warehouse.contact_phone}
                    </div>
                    <div className="warehouses__data">
                      {warehouse.contact_email}
                    </div>
                  </div>
                </div>
                {/* Tablet View */}
                <div className="warehouses__tabletinfo">
                  <div className="warehouses__datatablet">
                    <p className="warehouses__datatablet--highlight">
                      {warehouse.warehouse_name}
                    </p>
                    <img
                      className="warehouses__arrowicon"
                      src={arrowIcon}
                      alt="arrow icon"
                    />
                  </div>

                  <div className="warehouses__datatablet">
                    {warehouse.address}
                  </div>

                  <div className="warehouses__datatablet">
                    {warehouse.contact_name}
                  </div>
                  <div className=" warehouses__infoboxdiv">
                    <div className="warehouses__datatablet2">
                      {warehouse.contact_phone}
                    </div>
                    <div className="warehouses__datatablet2">
                      {warehouse.contact_email}
                    </div>
                  </div>
                  <div className="warehouses__datatablet warehouses__actions--tablet">
                    <div
                      className="warehouses__trash"
                      onClick={() => handleOpenModal(warehouse)}
                    >
                      <img
                        className="warehouses__trashicon"
                        src={trashIcon}
                        alt="trash icon"
                      />
                    </div>
                    <div
                      className="warehouses__edit"
                      onClick={() =>
                        navigate(`/edit-warehouse/${warehouse.id}`, {
                          state: { warehouse },
                        })
                      }
                    >
                      <img
                        className="warehouses__editicon"
                        src={editIcon}
                        alt="edit icon"
                      />
                    </div>
                  </div>
                </div>
                {/* mobile buttons */}
                <div className="warehouses__actions--mobile">
                  <div
                    className="warehouses__trash"
                    onClick={() => handleOpenModal(warehouse)}
                  >
                    <img
                      className="warehouses__trashicon"
                      src={trashIcon}
                      alt="trash icon"
                    />
                  </div>
                  <div
                    className="warehouses__edit"
                    onClick={() =>
                      navigate(`/edit-warehouse/${warehouse.id}`, {
                        state: { warehouse },
                      })
                    }
                  >
                    <img
                      className="warehouses__editicon"
                      src={editIcon}
                      alt="edit icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
