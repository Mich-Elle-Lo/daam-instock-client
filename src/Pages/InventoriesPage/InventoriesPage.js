import React, { useEffect, useState } from "react";
import axios from "axios";
import "./InventoriesPage.scss";
import searchIcon from "../../Assets/Icons/search-24px.svg";
import sortIcon from "../../Assets/Icons/sort-24px.svg";
import trashIcon from "../../Assets/Icons/delete_outline-24px.svg";
import editIcon from "../../Assets/Icons/edit-24px.svg";
import arrowIcon from "../../Assets/Icons/chevron_right-24px.svg";

export default function InventoriesPage() {
  const [warehouses, setWarehouses] = useState([1]);
  const [inventory, setInventory] = useState([]);

  const baseUrl = "http://localhost:8080/";

  useEffect(() => {
    const fetchInventories = async () => {
      try {
        const response = await axios.get(`${baseUrl}api/inventories`);

        setInventory(response.data);
      } catch (error) {
        console.error("error error", error);
      }
    };
    fetchInventories();
  }, []);

  return (
    <section className="inventories">
      <div className="inventories__wrapper">
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
          <button className="inventories__button"> +Add New Item</button>
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
          <div key={inventory.id} className="inventories__card">
            <div className="inventories__details">
              <div className="inventories__mobilebox">
                <div className="inventories__infobox">
                  <div className="inventories__infotitle">INVENTORY ITEM</div>
                  <div className="inventories__data">{inventory.item_name}</div>
                </div>

                <div className="inventories__infobox">
                  <div className="inventories__infotitle">CATEGORY</div>
                  <div className="inventories__data">{inventory.category}</div>
                </div>
              </div>

              <div className="inventories__mobilebox">
                <div className="inventories__infobox">
                  <div className="inventories__infotitle">STATUS</div>
                  <div className="inventories__data">{inventory.status}</div>
                </div>

                <div className="inventories__infobox">
                  <div className="inventories__infotitle">QTY</div>
                  <div className="inventories__data">{inventory.quantity}</div>
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
                {inventory.item_name}
                <img
                  className="inventories__arrowicon"
                  src={arrowIcon}
                  alt="arrow icon"
                />
              </div>

              <div className="inventories__datatablet">
                {inventory.category}
              </div>

              <div className="inventories__datatablet">{inventory.status}</div>

              <div className="inventories__datatablet">
                {inventory.quantity}
              </div>

              <div className="inventories__datatablet">
                {inventory.warehouse_name}
              </div>
            </div>

            <div className="inventories__actions">
              <div className="inventories__datatablet inventories__actions--tablet">
                <div className="inventories__trash">
                  <img
                    className="inventories__trashicon"
                    src={trashIcon}
                    alt="trash icon"
                  />
                </div>

                <div className="inventories__edit">
                  <img
                    className="inventories__editicon"
                    src={editIcon}
                    alt="edit icon"
                  />
                </div>
              </div>
            </div>

            {/* mobile buttons */}
            <div className="inventories__actions--mobile">
              <div className="inventories__trash">
                <img
                  className="inventories__trashicon"
                  src={trashIcon}
                  alt="trash icon"
                />
              </div>

              <div className="inventories__edit">
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
    </section>
  );
}
