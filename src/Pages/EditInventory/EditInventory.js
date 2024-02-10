import "./EditInventory.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BackArrow from "../../Assets/Icons/arrow_back-24px.svg";
import ErrorIcon from "../../Assets/Icons/error-24px.svg";

export default function EditInventory() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { warehouse } = location.state || {};

  const [formData, setFormData] = useState({
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: "",
    warehouse: "",
  });

  const [errors, setErrors] = useState({});

  return (
    <section className="edit-inventory">
      <div className="edit-inventory__title-container">
        <img src={BackArrow} alt="Back Arrow" />
        <h1 className="edit-inventory__title">Edit Inventory Item</h1>
      </div>
      <form className="edit-inventory__form">
        <div className="edit-inventory__item-details">
          <h2 className="edit-inventory__section-title">Item Details</h2>
          <label className="edit-inventory__label" htmlFor="itemName">
            Item Name
          </label>
          <input
            className="edit-inventory__input"
            type="text"
            id="item_name"
            name="item_name"
            // value={formData.warehouse_name}
            // onChange={handleInputChange}
          />
          {/* {errors.warehouse_name && (
            <div className="edit-warehouse__error">
              <img src={ErrorIcon} className="error-icon" alt="Error Icon" />
              {errors.warehouse_name}
            </div>
          )} */}

          <label className="edit-inventory__label" htmlFor="description">
            Description
          </label>
          <textarea
            className="edit-inventory__textarea"
            rows={5}
            type="text"
            id="description"
            name="description"
            // value={formData.address}
            // onChange={handleInputChange}
          ></textarea>
          {/* {errors.address && (
            <div className="edit-warehouse__error">
              <img src={ErrorIcon} className="error-icon" alt="Error Icon" />
              {errors.address}
            </div>
          )} */}

          <label className="edit-inventory__label" htmlFor="category">
            Category
          </label>
          <select
            label="Please select"
            className="edit-inventory__input"
            id="category"
            name="category"
            // value={formData.city}
            // onChange={handleInputChange}
          >
            <option value="Electronics">Electronics</option>
            <option value="Gear">Gear</option>
            <option value="Apparel">Apparel</option>
            <option value="Accessories">Accessories</option>
            <option value="Health">Health</option>
          </select>
          {/* {errors.city && (
            <div className="edit-warehouse__error">
              <img src={ErrorIcon} className="error-icon" alt="Error Icon" />
              {errors.city}
            </div>
          )} */}
        </div>
        <div className="edit-inventory__item-availability">
          <h2 className="edit-inventory__section-title">Item Availability</h2>
          <label className="edit-inventory__label" htmlFor="status">
            Status
          </label>
          <input
            // className={`edit-warehouse__input ${
            //   errors.contact_name && "error-outline"
            // }`}
            type="radio"
            id="status"
            name="status"
            // value={formData.contact_name}
            // onChange={handleInputChange}
          />
          {/* {errors.contact_name && (
            <div className="edit-warehouse__error">
              <img src={ErrorIcon} className="error-icon" alt="Error Icon" />
              {errors.contact_name}
            </div>
          )} */}

          <label className="edit-inventory__label" htmlFor="warehouse">
            Warehouse
          </label>
          <input
            className="edit-inventory__input"
            type="dropdown"
            id="warehouse"
            name="warehouse"
            // value={formData.contact_position}
            // onChange={handleInputChange}
          />
          {/* {errors.contact_position && (
            <div className="edit-warehouse__error">
              <img src={ErrorIcon} className="error-icon" alt="Error Icon" />
              {errors.contact_position}
            </div>
          )} */}
        </div>
      </form>
      <div className="edit-inventory__btn-container">
        <button
          className="edit-inventory__btn cancel-btn"
          type="button"
          //   onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="edit-inventory__btn save-btn"
          type="button"
          //   onClick={handleSave}
        >
          Save
        </button>
      </div>
    </section>
  );
}
