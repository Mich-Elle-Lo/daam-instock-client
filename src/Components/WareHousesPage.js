import React, { useState } from "react";
import "./WareHousesPage.scss";
import searchIcon from "../Assets/Icons/search-24px.svg";
import sortIcon from "../Assets/Icons/sort-24px.svg";
import trashIcon from "../Assets/Icons/delete_outline-24px.svg";
import editIcon from "../Assets/Icons/edit-24px.svg";

export default function WareHousesPage() {
  const [warehouses, setWarehouses] = useState([]);

  return (
    <section className="warehouses">
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
            <img
              className="warehouses__searchicon"
              src={searchIcon}
              alt="search icon"
            />
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
        <div className="warehouses__box">ACTIONS</div>
      </div>
      <div className="warehouses__list">
        {warehouses.map((warehouse) => (
          <div key={warehouse.id} className="warehouses__card">
            <div className="warehouses__details">
              <div className="warehouses__mobilebox">
                <div className="warehouses__infobox">
                  <div className="warehouses__infotitle">WAREHOUSE</div>
                  <div>{warehouse.name}</div>
                </div>
                <div className="warehouses__infobox">
                  <div className="warehouses__infotitle">ADDRESS</div>
                  <div>{warehouse.address}</div>
                </div>
              </div>
              <div className="warehouses__mobilebox">
                <div className="warehouses__infobox">
                  <div className="warehouses__infotitle">CONTACT NAME</div>
                  <div>{warehouse.contact_name}</div>
                </div>
                <div className="warehouses__infobox">
                  <div className="warehouses__infotitle">
                    CONTACT INFORMATION
                  </div>
                  <div>{warehouse.contact_phone}</div>
                  <div>{warehouse.contact_email}</div>
                </div>
              </div>
            </div>
            <div className="warehouses__actions">
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
        ))}
      </div>
    </section>
  );
}
