import React from "react";
import "./WareHousesPage.scss";
import searchIcon from "../Assets/Icons/search-24px.svg";
import sortIcon from "../Assets/Icons/sort-24px.svg";

export default function WareHousesPage() {
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
    </section>
  );
}
