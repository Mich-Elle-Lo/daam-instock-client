import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Arrow from "../../Assets/Icons/arrow_back-24px.svg";
import Edit from "../../Assets/Icons/edit-24px.svg";
import "./InventoryItemDetails.scss";

export default function InventoryItemDetails() {
  const [singleItem, setSingleItem] = useState({
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
      if (id !== singleItem.id) {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/inventories/${id}`
          );
          setSingleItem(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchData();
  }, [id]);

  const editItem = () => {
    navigate(`/inventories/edit/${singleItem.id}`);
  };

  return (
    <section className="itemdetails">
      <div className="itemdetails__header">
        <div className="itemdetails__header--back">
          <Link to="/inventories" className="itemdetails__header--link">
            <img
              className="itemdetails__header--arrow"
              src={Arrow}
              alt="Backarrow"
            />
          </Link>
          <h1 className="itemdetails__header--title">{singleItem.item_name}</h1>
        </div>
        <div to="#" className="itemdetails__edit">
          <button className="itemdetails__button" onClick={editItem}>
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
            {singleItem.description}
          </p>
          <h3 className="itemdetails__description--header">CATEGORY:</h3>
          <p className="itemdetails__description--description">
            {singleItem.category}
          </p>
        </div>
        <div className="itemdetails__line"></div>
        <div className="itemdetails__logistics">
          <div className="itemdetails__logistics--detail">
            <div className="itemdetails__logistics--status">
              <h3 className="itemdetails__logistics--name">STATUS:</h3>
              {singleItem.status === "In Stock" && (
                <p className="itemdetails__logistics--instock">IN STOCK</p>
              )}
              {singleItem.status === "Out of Stock" && (
                <p className="itemdetails__logistics--outstock">OUT OF STOCK</p>
              )}
            </div>
            <div className="itemdetails__logistics--quantity">
              <h3 className="itemdetails__logistics--name">QUANTITY:</h3>
              <p className="itemdetails__logistics--value">
                {singleItem.quantity}
              </p>
            </div>
          </div>
          <div className="itemdetails__logistics--warehouse">
            <h3 className="itemdetails__logistics--name">WAREHOUSE:</h3>
            <p className="itemdetails__logistics--value">
              {singleItem.warehouse_name}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
