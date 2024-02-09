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

  useEffect(() => {
    if (!warehouse) {
      const fetchWarehouseDetails = async () => {
        try {
          const response = await axios.get(`${baseUrl}api/warehouses/${id}`);
          setWarehouse(response.data);
        } catch (error) {
          console.error("Error fetching warehouse details:", error);
        }
      };
      fetchWarehouseDetails();
    }

    const fetchInventories = async () => {
      try {
        const response = await axios.get(`${baseUrl}api/inventories/${id}`);
        setInventories(response.data);
      } catch (error) {
        console.error("Error fetching inventories:", error);
      }
    };
    fetchInventories();
  }, [id]);

  return (
    <section className="warehouses">
      <div className="warehouses__content">
        <div className="warehouses__wrapper">
          <h1 className="warehouses__title">{warehouse.warehouse_name}</h1>
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
      </div>
    </section>
  );
}
