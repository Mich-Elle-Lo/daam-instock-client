import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./WarehouseDetails.scss";
import InventoryModal from "../../Components/InventoryModal/InventoryModal";
import sortIcon from "../../Assets/Icons/sort-24px.svg";
import trashIcon from "../../Assets/Icons/delete_outline-24px.svg";
import editIcon from "../../Assets/Icons/edit-24px.svg";
import arrowIcon from "../../Assets/Icons/chevron_right-24px.svg";

export default function WarehouseDetails() {
  const baseUrl = "http://localhost:8080/";
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const [warehouse, setWarehouse] = useState(state?.warehouse);
  const [inventories, setInventories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedInventory, setSelectedInventory] = useState(null);

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

  // Open modal
  const handleOpenModal = (selectedInventory) => {
    setSelectedInventory(selectedInventory);
    setShowModal(true);
  };

  useEffect(() => {
    const fetchWarehouseDetails = async () => {
      try {
        let warehouseData = state?.warehouse;
        if (!warehouseData) {
          const response = await axios.get(`${baseUrl}api/warehouses/${id}`);
          warehouseData = response.data;
          setWarehouse(warehouseData);
        }
        const inventoryResponse = await axios.get(
          `${baseUrl}api/warehouses/${id}/inventories`
        );
        setInventories(inventoryResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchWarehouseDetails();
  }, [id, warehouse]);

  const navigateToInventoryDetails = (inventory) => {
    navigate(`/inventories/${inventory.id}`, { state: { inventory } });
  };

  return (
    <section className="warehouse">
      <InventoryModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onDelete={deleteInventory}
        inventory={selectedInventory}
      />
      <div className="warehouse__content">
        <div className="warehouse__header">
          <h1 className="warehouse__title">
            {warehouse?.warehouse_name || "Loading warehouse details..."}
          </h1>
          <div className="warehouse__header-edit">
            <img
              className="warehouse__header-editicon"
              src={editIcon}
              alt="edit icon"
            />
            <p className="warehouse__header-edittext">Edit</p>
          </div>
        </div>

        <article className="warehouse__contact">
          {/* //<div className="warehouse__contact-box warehouse__contact-box--tablet"> */}
          <div className="warehouse__contact-mobile-address">
            <p className="warehouse__contact-title">WAREHOUSE ADDRESS:</p>
            <p className="warehouse__contact-details ">
              {warehouse.address}, {warehouse.city}, {warehouse.country}
            </p>
          </div>
          <div className="warehouse__contact-tablet-address">
            <p className="warehouse__contact-title">WAREHOUSE ADDRESS:</p>
            <p className="warehouse__contact-details ">{warehouse.address}</p>
            <p className="warehouse__contact-details">
              {warehouse.city}, {warehouse.country}
            </p>
          </div>
          {/* </div> */}
          <div className="warehouse__contact-box">
            <div className="warehouse__contact-info">
              {" "}
              <p className="warehouse__contact-title">CONTACT NAME:</p>
              {/* <br></br> */}
              <p className="warehouse__contact-details">
                {warehouse.contact_name}
              </p>
              <p className="warehouse__contact-details">
                {warehouse.contact_position}
              </p>
            </div>

            <div className="warehouse__contact-info">
              {" "}
              <p className="warehouse__contact-title">CONTACT INFORMATION:</p>
              {/* <br></br> */}
              <p className="warehouse__contact-details">
                {warehouse.contact_phone}
              </p>
              <p className="warehouse__contact-details">
                {warehouse.contact_email}
              </p>
            </div>
          </div>
        </article>
        <div className="warehouse__options">
          <div className="warehouse__box">
            INVENTORY ITEM
            <img
              className="warehouse__sorticon"
              src={sortIcon}
              alt="sort icon"
            />
          </div>
          <div className="warehouse__box">
            CATEGORY
            <img
              className="warehouse__sorticon"
              src={sortIcon}
              alt="sort icon"
            />
          </div>
          <div className="warehouse__box">
            STATUS
            <img
              className="warehouse__sorticon"
              src={sortIcon}
              alt="sort icon"
            />
          </div>
          <div className="warehouse__box">
            QUANITY
            <img
              className="warehouse__sorticon"
              src={sortIcon}
              alt="sort icon"
            />
          </div>
          <div className="warehouse__boxflex">ACTIONS</div>
        </div>
        <section className="inventory">
          {inventories.map((inventory) => (
            <div
              key={inventory.id}
              className="inventory__card"
              onClick={() => navigateToInventoryDetails(inventory)}
            >
              <div className="inventory__details">
                <div className="inventory__mobilebox">
                  <div className="inventory__infobox">
                    <p className="inventory__infotitle">INVENTORY ITEM</p>
                    <div className="inventory__data">
                      {inventory.item_name}{" "}
                      <img
                        className="inventory__arrowicon"
                        src={arrowIcon}
                        alt="arrow icon"
                      />
                    </div>
                  </div>

                  <div className="inventory__infobox">
                    <p className="inventory__infotitle">CATEGORY</p>
                    <p className="inventory__data">{inventory.category}</p>
                  </div>
                </div>
                <div className="inventory__mobilebox">
                  <div className="inventory__infobox ">
                    <div className="inventory__infotitle">STATUS</div>
                    <div className="inventory__data inventory__status">
                      {inventory.status === "In Stock" && (
                        <div className="inventory__status--instock">
                          IN STOCK
                        </div>
                      )}
                      {inventory.status === "Out of Stock" && (
                        <div className="inventory__status--outofstock">
                          OUT OF STOCK
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="inventory__infobox">
                    <p className="inventory__infotitle">QTY</p>
                    <p className="inventory__data">{inventory.quantity}</p>
                  </div>
                </div>
              </div>
              <div className="inventory__actions--mobile">
                <div
                  className="inventory__trash"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenModal(inventory);
                  }}
                >
                  <img
                    className="inventory__trashicon"
                    src={trashIcon}
                    alt="trash icon"
                  />
                </div>
                <div className="inventory__edit">
                  <img
                    className="inventory__editicon"
                    src={editIcon}
                    alt="edit icon"
                  />
                </div>
              </div>
              {/* TABLET VIEW */}
              <div className="inventory__tabletinfo">
                <div className="inventory__datatablet">
                  <p className="inventory__datatablet--highlight">
                    {inventory.item_name}
                  </p>
                  <img
                    className="inventory__arrowicon"
                    src={arrowIcon}
                    alt="arrow icon"
                  />
                </div>

                <div className="inventory__datatablet">
                  {inventory.category}
                </div>

                <div className="inventory__datatablet inventory__status">
                  {" "}
                  {inventory.status === "In Stock" && (
                    <div className="inventory__status--instock">IN STOCK</div>
                  )}
                  {inventory.status === "Out of Stock" && (
                    <div className="inventory__status--outofstock">
                      OUT OF STOCK
                    </div>
                  )}
                </div>

                <div className="inventory__datatablet">
                  {inventory.quantity}
                </div>

                <div className="inventory__dataaction inventory__actions--tablet">
                  <div
                    className="inventory__trash"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenModal(inventory);
                    }}
                  >
                    <img
                      className="inventory__trashicon"
                      src={trashIcon}
                      alt="trash icon"
                    />
                  </div>
                  <div className="inventory__edit">
                    <img
                      className="inventory__editicon"
                      src={editIcon}
                      alt="edit icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}
