import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Arrow from "../../Assets/Icons/arrow_back-24px.svg";
import Edit from "../../Assets/Icons/edit-24px.svg";
import "./InventoryItemDetails.scss";

export default function InventoryItemDetails() {
  const [inventory, setInventory] = useState({
    id: "",
    warehouse_id: "",
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: "",
    warehouse_name: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (id !== inventory.id) {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/inventories/${id}`
          );
          setInventory(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchData();
  }, [id]);

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <section className="itemdetails">
      <div className="itemdetails__header">
        <div className="itemdetails__header--back">
          <img
            className="itemdetails__header--arrow"
            src={Arrow}
            alt="Backarrow"
            onClick={handleCancel}
          />
          <h1 className="itemdetails__header--title">{inventory.item_name}</h1>
        </div>
        <div to="#" className="itemdetails__edit">
          <button
            className="itemdetails__button"
            onClick={() =>
              navigate(`/inventories/edit/${inventory.id}`, {
                state: { inventory },
              })
            }
          >
            <img className="itemdetails__button--icon" src={Edit} alt="edit" />
            <p className="itemdetails__button--text">Edit</p>
          </button>
        </div>
      </div>
      <div className="itemdetails__container">
        <div className="itemdetails__description">
          <h3 className="itemdetails__description--header">
            ITEM DESCRIPTION:
          </h3>
          <p className="itemdetails__description--description">
            {inventory.description}
          </p>
          <h3 className="itemdetails__description--header">CATEGORY:</h3>
          <p className="itemdetails__description--description">
            {inventory.category}
          </p>
        </div>
        <div className="itemdetails__line"></div>
        <div className="itemdetails__logistics">
          <div className="itemdetails__logistics--detail">
            <div className="itemdetails__logistics--status">
              <h3 className="itemdetails__logistics--name">STATUS:</h3>
              {inventory.status === "In Stock" && (
                <p className="itemdetails__logistics--instock">IN STOCK</p>
              )}
              {inventory.status === "Out of Stock" && (
                <p className="itemdetails__logistics--outstock">OUT OF STOCK</p>
              )}
            </div>
            <div className="itemdetails__logistics--quantity">
              <h3 className="itemdetails__logistics--name">QUANTITY:</h3>
              <p className="itemdetails__logistics--value">
                {inventory.quantity}
              </p>
            </div>
          </div>
          <div className="itemdetails__logistics--warehouse">
            <h3 className="itemdetails__logistics--name">WAREHOUSE:</h3>
            <p className="itemdetails__logistics--value">
              {inventory.warehouse_name}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
