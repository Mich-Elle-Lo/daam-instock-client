import "./EditWarehouse.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import BackArrow from "../../Assets/Icons/arrow_back-24px.svg";

export default function EditWarehouse() {
  const location = useLocation();
  const navigate = useNavigate();
  const { warehouse } = location.state || {};

  const [formData, setFormData] = useState({
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  });

  useEffect(() => {
    if (warehouse) {
      setFormData(warehouse);
    }
  }, [warehouse]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCancel = () => {
    navigate("/");
  };

  const handleSave = async () => {
    try {
      const formattedDateTime = new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");

      const updatedFormData = {
        ...formData,
        created_at: formattedDateTime,
        updated_at: formattedDateTime,
      };

      await axios.put(
        `http://localhost:8080/api/warehouses/${warehouse.id}`,
        updatedFormData
      );
      navigate("/");
    } catch (error) {
      console.error("Error saving warehouse:", error);
    }
  };

  return (
    <section className="edit-warehouse">
      <div className="edit-warehouse__title-container">
        <img src={BackArrow} alt="Back Arrow" onClick={handleCancel} />
        <h1 className="edit-warehouse__title">Edit Warehouse</h1>
      </div>
      <form className="edit-warehouse__form">
        <div className="edit-warehouse__warehouse-details">
          <h2 className="edit-warehouse__section-title">Warehouse Details</h2>
          <label className="edit-warehouse__label" htmlFor="warehouseName">
            Warehouse Name
          </label>
          <input
            className="edit-warehouse__input"
            type="text"
            id="warehouse_name"
            name="warehouse_name"
            value={formData.warehouse_name}
            onChange={handleInputChange}
          />

          <label className="edit-warehouse__label" htmlFor="streetAddress">
            Street Address
          </label>
          <input
            className="edit-warehouse__input"
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />

          <label className="edit-warehouse__label" htmlFor="city">
            City
          </label>
          <input
            className="edit-warehouse__input"
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />

          <label className="edit-warehouse__label" htmlFor="country">
            Country
          </label>
          <input
            className="edit-warehouse__input"
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          />
        </div>
        <div className="edit-warehouse__contact-details">
          <h2 className="edit-warehouse__section-title">Contact Details</h2>
          <label className="edit-warehouse__label" htmlFor="contactName">
            Contact Name
          </label>
          <input
            className="edit-warehouse__input"
            type="text"
            id="contact_name"
            name="contact_name"
            value={formData.contact_name}
            onChange={handleInputChange}
          />

          <label className="edit-warehouse__label" htmlFor="position">
            Position
          </label>
          <input
            className="edit-warehouse__input"
            type="text"
            id="contact_position"
            name="contact_position"
            value={formData.contact_position}
            onChange={handleInputChange}
          />

          <label className="edit-warehouse__label" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="edit-warehouse__input"
            type="text"
            id="contact_phone"
            name="contact_phone"
            value={formData.contact_phone}
            onChange={handleInputChange}
          />

          <label className="edit-warehouse__label" htmlFor="email">
            Email
          </label>
          <input
            className="edit-warehouse__input"
            type="text"
            id="contact_email"
            name="contact_email"
            value={formData.contact_email}
            onChange={handleInputChange}
          />
        </div>
      </form>
      <div className="edit-warehouse__btn-container">
        <button
          className="edit-warehouse__btn cancel-btn"
          type="button"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="edit-warehouse__btn save-btn"
          type="button"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </section>
  );
}
