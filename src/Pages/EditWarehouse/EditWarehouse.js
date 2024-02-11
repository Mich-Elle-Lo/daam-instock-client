import "./EditWarehouse.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BackArrow from "../../Assets/Icons/arrow_back-24px.svg";
import ErrorIcon from "../../Assets/Icons/error-24px.svg";

export default function EditWarehouse() {
  const { id } = useParams();
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

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (warehouse) {
      setFormData(warehouse);
    }
  }, [warehouse]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleCancel = () => {
    navigate("/");
  };

  const handleSave = async () => {
    const newErrors = {};

    if (!/^\d{10}$/.test(formData.contact_phone)) {
      newErrors.contact_phone = "Invalid Phone Number";
    }

    if (!/\S+@\S+\.\S+/.test(formData.contact_email)) {
      newErrors.contact_email = "Invalid Email Address";
    }

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const formattedPhone = `+1 (${formData.contact_phone.substring(
      0,
      3
    )}) ${formData.contact_phone.substring(
      3,
      6
    )}-${formData.contact_phone.substring(6)}`;

    try {
      const formattedDateTime = new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");

      const updatedFormData = {
        ...formData,
        contact_phone: formattedPhone,
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
        <img
          src={BackArrow}
          className="back-arrow"
          alt="Back Arrow"
          onClick={handleCancel}
        />
        <h1 className="edit-warehouse__title">Edit Warehouse</h1>
      </div>
      <form className="edit-warehouse__form">
        <div className="edit-warehouse__warehouse-details">
          <h2 className="edit-warehouse__section-title">Warehouse Details</h2>
          <label className="edit-warehouse__label" htmlFor="warehouseName">
            Warehouse Name
          </label>
          <input
            className={`edit-warehouse__input ${
              errors.warehouse_name && "error-outline"
            }`}
            type="text"
            id="warehouse_name"
            name="warehouse_name"
            value={formData.warehouse_name}
            onChange={handleInputChange}
          />
          {errors.warehouse_name && (
            <div className="edit-warehouse__error">
              <img src={ErrorIcon} className="error-icon" alt="Error Icon" />
              {errors.warehouse_name}
            </div>
          )}

          <label className="edit-warehouse__label" htmlFor="streetAddress">
            Street Address
          </label>
          <input
            className={`edit-warehouse__input ${
              errors.address && "error-outline"
            }`}
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          {errors.address && (
            <div className="edit-warehouse__error">
              <img src={ErrorIcon} className="error-icon" alt="Error Icon" />
              {errors.address}
            </div>
          )}

          <label className="edit-warehouse__label" htmlFor="city">
            City
          </label>
          <input
            className={`edit-warehouse__input ${
              errors.city && "error-outline"
            }`}
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
          {errors.city && (
            <div className="edit-warehouse__error">
              <img src={ErrorIcon} className="error-icon" alt="Error Icon" />
              {errors.city}
            </div>
          )}

          <label className="edit-warehouse__label" htmlFor="country">
            Country
          </label>
          <input
            className={`edit-warehouse__input ${
              errors.country && "error-outline"
            }`}
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          />
          {errors.country && (
            <div className="edit-warehouse__error">
              <img src={ErrorIcon} className="error-icon" alt="Error Icon" />
              {errors.country}
            </div>
          )}
        </div>
        <div className="edit-warehouse__contact-details">
          <h2 className="edit-warehouse__section-title">Contact Details</h2>
          <label className="edit-warehouse__label" htmlFor="contactName">
            Contact Name
          </label>
          <input
            className={`edit-warehouse__input ${
              errors.contact_name && "error-outline"
            }`}
            type="text"
            id="contact_name"
            name="contact_name"
            value={formData.contact_name}
            onChange={handleInputChange}
          />
          {errors.contact_name && (
            <div className="edit-warehouse__error">
              <img src={ErrorIcon} className="error-icon" alt="Error Icon" />
              {errors.contact_name}
            </div>
          )}

          <label className="edit-warehouse__label" htmlFor="position">
            Position
          </label>
          <input
            className={`edit-warehouse__input ${
              errors.contact_position && "error-outline"
            }`}
            type="text"
            id="contact_position"
            name="contact_position"
            value={formData.contact_position}
            onChange={handleInputChange}
          />
          {errors.contact_position && (
            <div className="edit-warehouse__error">
              <img src={ErrorIcon} className="error-icon" alt="Error Icon" />
              {errors.contact_position}
            </div>
          )}

          <label className="edit-warehouse__label" htmlFor="phone">
            Phone Number
          </label>
          <input
            className={`edit-warehouse__input ${
              errors.contact_phone && "error-outline"
            }`}
            type="text"
            id="contact_phone"
            name="contact_phone"
            value={formData.contact_phone}
            onChange={handleInputChange}
          />
          {errors.contact_phone && (
            <div className="edit-warehouse__error">
              <img src={ErrorIcon} className="error-icon" alt="Error Icon" />
              {errors.contact_phone}
            </div>
          )}

          <label className="edit-warehouse__label" htmlFor="email">
            Email
          </label>
          <input
            className={`edit-warehouse__input ${
              errors.contact_email && "error-outline"
            }`}
            type="text"
            id="contact_email"
            name="contact_email"
            value={formData.contact_email}
            onChange={handleInputChange}
          />
          {errors.contact_email && (
            <div className="edit-warehouse__error">
              <img src={ErrorIcon} className="error-icon" alt="Error Icon" />
              {errors.contact_email}
            </div>
          )}
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
