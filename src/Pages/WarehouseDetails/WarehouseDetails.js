import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import "./WarehouseDetails.scss";
import WarehouseModal from "../../Components/Modal/WarehouseModal";
import searchIcon from "../../Assets/Icons/search-24px.svg";
import sortIcon from "../../Assets/Icons/sort-24px.svg";
import trashIcon from "../../Assets/Icons/delete_outline-24px.svg";
import editIcon from "../../Assets/Icons/edit-24px.svg";
import arrowIcon from "../../Assets/Icons/chevron_right-24px.svg";

export default function WarehouseDetails() {
  const baseUrl = "http://localhost:8080/";
  const { id } = useParams();
  const { state } = useLocation();

  const [warehouse, setWarehouse] = useState(state?.warehouse);
  const [inventories, setInventories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWarehouseDetails = async () => {
      setIsLoading(true);
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
        setError("Failed to fetch data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchWarehouseDetails();
  }, [id, warehouse]);

  return (
    <section className="warehouse">
      <div className="warehouse__content">
        <div className="warehouse__wrapper">
          <h1 className="warehouse__title">
            {warehouse?.warehouse_name || "Loading warehouse details..."}
          </h1>
        </div>
        <article className="warehouse__contact">
          <div className="warehouse__contact-box">
            <div>
              <p>WAREHOUSE ADDRESS:</p>
              <p>{warehouse.address}</p>
            </div>
          </div>
          <div className="warehouse__contact-box">
            <div className="warehouse__contact-info">
              {" "}
              <p>CONTACT NAME:</p>
              <br></br>
              <p>{warehouse.contact_name}</p>
            </div>

            <div className="warehouse__contact-info">
              {" "}
              <p>CONTACT INFORMATION:</p>
              <br></br>
              <p>{warehouse.contact_phone}</p>
              <p>{warehouse.contact_email}</p>
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
            <div key={inventory.id} className="inventory__card">
              <div className="inventory__details">
                <div className="inventory__mobilebox">
                  <div className="inventory__infobox">
                    <p className="inventory__infotitle">INVENTORY ITEM</p>
                    <p className="warehouses__data">{inventory.item_name}</p>
                  </div>

                  <div className="inventory__infobox">
                    <p className="inventory__infotitle">CATEGORY</p>
                    <p className="warehouses__data">{inventory.category}</p>
                  </div>
                </div>
                <div className="inventory__mobilebox">
                  <div className="inventory__infobox">
                    <div className="inventory__infotitle">STATUS</div>
                    <p className="warehouses__data">{inventory.status}</p>
                  </div>

                  <div className="inventory__infobox">
                    <p className="inventory__infotitle">QTY</p>
                    <p className="warehouses__data">{inventory.quantity}</p>
                  </div>
                </div>
              </div>
              <div className="inventory__actions--mobile">
                <div className="inventory__trash">
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
              <div className="warehouses__tabletinfo">
                <div className="warehouses__datatablet">
                  <p className="warehouses__datatablet--highlight">
                    {inventory.item_name}
                  </p>
                  <img
                    className="warehouses__arrowicon"
                    src={arrowIcon}
                    alt="arrow icon"
                  />
                </div>

                <div className="warehouses__datatablet">
                  {inventory.category}
                </div>

                <div className="warehouses__datatablet">{inventory.status}</div>
                <div className=" warehouses__infoboxdiv">
                  <p className="warehouses__datatablet">{inventory.quantity}</p>
                </div>
                <div className="warehouses__datatablet warehouses__actions--tablet">
                  <div className="warehouses__trash">
                    <img
                      className="warehouses__trashicon"
                      src={trashIcon}
                      alt="trash icon"
                    />
                  </div>
                  <div className="warehouses__edit">
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
        </section>
      </div>
    </section>
  );
}
