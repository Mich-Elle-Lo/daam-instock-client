import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./InventoriesPage.scss";
import InventoryModal from "../../Components/InventoryModal/InventoryModal";
import searchIcon from "../../Assets/Icons/search-24px.svg";
import sortIcon from "../../Assets/Icons/sort-24px.svg";
import trashIcon from "../../Assets/Icons/delete_outline-24px.svg";
import editIcon from "../../Assets/Icons/edit-24px.svg";
import arrowIcon from "../../Assets/Icons/chevron_right-24px.svg";

export default function InventoriesPage() {
  const baseUrl = "http://localhost:8080/";
  const [warehouses, setWarehouses] = useState([]);
  const [inventories, setInventories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedInventory, setSelectedInventory] = useState(null);
  const navigate = useNavigate();

  const deleteInventory = (inventoryId) => {
    return axios
      .delete(`${baseUrl}api/inventories/${inventoryId}`)
      .then((response) => {
        const updatedInventories = inventories.filter(
          (inventory) => inventory.id !== inventoryId
        );
        setInventories(updatedInventories);
      })
      .catch((error) => {
        console.error("Error error with deletion:", error);
        throw error;
      });
  };

  const handleOpenModal = (selectedInventory) => {
    setSelectedInventory(selectedInventory);
    setShowModal(true);
  };

  useEffect(() => {
    const fetchInventories = async () => {
      try {
        const response = await axios.get(`${baseUrl}api/inventories`);
        setInventories(response.data);
      } catch (error) {
        console.error("error error", error);
      }
    };

    const fetchWarehouses = async () => {
      try {
        const response = await axios.get(`${baseUrl}api/warehouses`);

        setWarehouses(response.data);
      } catch (error) {
        console.error("error error", error);
      }
    };

    fetchInventories();
    fetchWarehouses();
  }, []);

  const navigateToInventoryDetails = (inventory) => {
    navigate(`/inventories/${inventory.id}`, { state: { inventory } });
  };

  return (
    <section className="inventories">
      <InventoryModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onDelete={deleteInventory}
        inventory={selectedInventory}
      />
      <article className="inventories__content">
        <div className="inventories__header">
          <h1 className="inventories__title">Inventory</h1>
          <form className="inventories__form">
            <div className="inventories__search">
              <input
                type="text"
                placeholder="Search..."
                id="searchBar"
                className="inventories__input"
              />
              <div className="inventories__iconbox">
                <img
                  className="inventories__searchicon"
                  src={searchIcon}
                  alt="search icon"
                />
              </div>
            </div>
            <button
              className="inventories__button"
              onClick={() => navigate("/inventories/add")}
            >
              + Add New Item
            </button>
          </form>
        </div>

        <div className="inventories__options">
          <div className="inventories__box">
            INVENTORY ITEM
            <img
              className="inventories__sorticon"
              src={sortIcon}
              alt="sort icon"
            />
          </div>
          <div className="inventories__box">
            CATEGORY
            <img
              className="inventories__sorticon"
              src={sortIcon}
              alt="sort icon"
            />
          </div>
          <div className="inventories__box">
            STATUS
            <img
              className="inventories__sorticon"
              src={sortIcon}
              alt="sort icon"
            />
          </div>
          <div className="inventories__box">
            QTY
            <img
              className="inventories__sorticon"
              src={sortIcon}
              alt="sort icon"
            />
          </div>
          <div className="inventories__box">
            WAREHOUSE
            <img
              className="inventories__sorticon"
              src={sortIcon}
              alt="sort icon"
            />
          </div>
          <div className="inventories__boxflex">ACTIONS</div>
        </div>

        <div className="inventories__list">
          {inventories.map((inventory) => (
            <div
              key={inventory.id}
              className="inventories__card"
              onClick={() => navigateToInventoryDetails(inventory)}
            >
              {/* Mobile View */}
              <div className="inventories__mobiledetails">
                <div className="inventories__mobilebox1">
                  <div className="inventories__infobox">
                    <div className="inventories__infotitle">INVENTORY ITEM</div>
                    <div className="inventories__infodata-wrap">
                      <div className="inventories__data-name">
                        {inventory.item_name}
                      </div>
                      <img
                        className="inventories__arrowicon"
                        src={arrowIcon}
                        alt="arrow icon"
                      />
                    </div>
                  </div>

                  <div className="inventories__infobox">
                    <div className="inventories__infotitle">CATEGORY</div>
                    <div className="inventories__data">
                      {inventory.category}
                    </div>
                  </div>
                </div>

                <div className="inventories__mobilebox2">
                  <div className="inventories__infobox">
                    <div className="inventories__infotitle">STATUS</div>
                    <div className="inventories__stockdata">
                      <div
                        className={`inventories__data--${
                          inventory.status.toLowerCase() === "in stock"
                            ? "in-stock"
                            : "out-of-stock"
                        }`}
                      >
                        {inventory.status}
                      </div>
                    </div>
                  </div>

                  <div className="inventories__infobox">
                    <div className="inventories__infotitle">QTY</div>
                    <div className="inventories__data">
                      {inventory.quantity}
                    </div>
                  </div>

                  <div className="inventories__infobox">
                    <div className="inventories__infotitle">WAREHOUSE</div>
                    <div className="inventories__data">
                      {inventory.warehouse_name}
                    </div>
                  </div>
                </div>
              </div>

              {/* Tablet View */}
              <div className="inventories__tabletinfo">
                <div className="inventories__datatablet">
                  <p className=" inventories__datatablet-name">
                    {inventory.item_name}
                  </p>
                  <img
                    className="inventories__arrowicon"
                    src={arrowIcon}
                    alt="arrow icon"
                  />
                </div>
                <div className="inventories__datatablet">
                  {inventory.category}
                </div>
                <div className="inventories__datatablet">
                  <p
                    className={`inventories__datatablet--${
                      inventory.status.toLowerCase() === "in stock"
                        ? "in-stock"
                        : "out-of-stock"
                    }`}
                  >
                    {inventory.status}
                  </p>
                </div>
                <div className="inventories__datatablet">
                  {inventory.quantity}
                </div>
                <div className="inventories__datatablet">
                  {inventory.warehouse_name}
                </div>
                <div className="inventories__actions inventories__actions--tablet">
                  <div
                    className="inventories__trash"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenModal(inventory);
                    }}
                  >
                    <img
                      className="inventories__trashicon"
                      src={trashIcon}
                      alt="trash icon"
                    />
                  </div>
                  <div
                    className="inventories__edit"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/inventories/edit/${inventory.id}`, {
                        state: { inventory },
                      });
                    }}
                  >
                    <img
                      className="inventories__editicon"
                      src={editIcon}
                      alt="edit icon"
                    />
                  </div>
                </div>
              </div>

              {/* mobile buttons */}
              <div className=" inventories__actions inventories__actions--mobile">
                <div
                  className="inventories__trash"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenModal(inventory);
                  }}
                >
                  <img
                    className="inventories__trashicon"
                    src={trashIcon}
                    alt="trash icon"
                  />
                </div>

                <div
                  className="inventories__edit"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/inventories/edit/${inventory.id}`, {
                      state: { inventory },
                    });
                  }}
                >
                  <img
                    className="inventories__editicon"
                    src={editIcon}
                    alt="edit icon"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
