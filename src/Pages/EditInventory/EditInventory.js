import "./EditInventory.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import BackArrow from "../../Assets/Icons/arrow_back-24px.svg";
import ErrorIcon from "../../Assets/Icons/error-24px.svg";

export default function EditInventory() {
  const location = useLocation();
  const navigate = useNavigate();
  const { inventory } = location.state || {};
  const [warehouses, setWarehouses] = useState([]);
  const [formData, setFormData] = useState({
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: "",
    warehouse_id: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/warehouses")
      .then((response) => {
        setWarehouses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching warehouses:", error);
      });

    if (inventory) {
      setFormData({
        ...formData,
        item_name: inventory.item_name,
        description: inventory.description,
        category: inventory.category,
        status: inventory.status,
        quantity: inventory.quantity,
        warehouse_id: inventory.warehouse_id.toString(),
      });
    }
  }, [inventory]);

  const [errors, setErrors] = useState({});

  const handleStatusChange = (event) => {
    const { name, value } = event.target;
    console.log(formData);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (inventory) {
      setFormData(inventory);
    }
  }, [inventory]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleCancel = () => {
    navigate("/inventories");
  };

  const handleSave = async () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }
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

      if (formData.status === "Out of Stock") {
        updatedFormData.quantity = 0;
      }

      await axios.put(
        `http://localhost:8080/api/inventories/${inventory.id}`,
        updatedFormData
      );
      navigate("/inventories");
    } catch (error) {
      console.error("Error saving inventory:", error);
    }
  };

  return (
    <section className="edit-inventory">
      <div className="edit-inventory__title-container">
        <img
          src={BackArrow}
          className="back-arrow"
          alt="Back Arrow"
          onClick={handleCancel}
        />
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
            value={formData.item_name}
            onChange={handleInputChange}
          />
          {errors.item_name && (
            <div className="edit-warehouse__error">
              <img src={ErrorIcon} className="error-icon" alt="Error Icon" />
              {errors.item_name}
            </div>
          )}
          <label className="edit-inventory__label" htmlFor="description">
            Description
          </label>
          <textarea
            className="edit-inventory__textarea"
            rows={5}
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
          {errors.description && (
            <div className="edit-warehouse__error">
              <img src={ErrorIcon} className="error-icon" alt="Error Icon" />
              {errors.description}
            </div>
          )}
          <label className="edit-inventory__label" htmlFor="category">
            Category
          </label>
          <div className="dropdown-container">
            <select
              className="edit-inventory__dropdown"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="">Please select</option>
              <option value="Electronics">Electronics</option>
              <option value="Gear">Gear</option>
              <option value="Apparel">Apparel</option>
              <option value="Accessories">Accessories</option>
              <option value="Health">Health</option>
            </select>
          </div>
          {errors.category && (
            <div className="edit-warehouse__error">
              <img src={ErrorIcon} className="error-icon" alt="Error Icon" />
              {errors.category}
            </div>
          )}
        </div>
        <div className="edit-inventory__item-availability">
          <h2 className="edit-inventory__section-title">Item Availability</h2>
          <label className="edit-inventory__label">Status</label>
          <div className="edit-inventory__status-options">
            <label className="edit-inventory__status-label">
              <input
                className="edit-inventory__radio-btn"
                type="radio"
                name="status"
                value="In Stock"
                checked={formData.status === "In Stock"}
                onChange={handleStatusChange}
              />
              In Stock
            </label>
            <label className="edit-inventory__status-label">
              <input
                className="edit-inventory__radio-btn"
                type="radio"
                name="status"
                value="Out of Stock"
                checked={formData.status === "Out of Stock"}
                onChange={handleStatusChange}
              />
              Out of Stock
            </label>
          </div>
          {formData.status === "In Stock" && (
            <div className="edit-inventory__quantity">
              <label className="edit-inventory__label" htmlFor="quantity">
                Quantity
              </label>
              <input
                className="edit-inventory__input"
                type="text"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
              />
            </div>
          )}

          <label className="edit-inventory__label" htmlFor="category">
            Warehouse
          </label>
          <div className="dropdown-container">
            <select
              className="edit-inventory__dropdown"
              id="warehouse"
              name="warehouse_id"
              value={formData.warehouse_id}
              onChange={handleInputChange}
            >
              <option value="">Please select</option>
              {warehouses.map((warehouse) => (
                <option key={warehouse.id} value={warehouse.id}>
                  {warehouse.warehouse_name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
      <div className="edit-inventory__btn-container">
        <button
          className="edit-inventory__btn cancel-btn"
          type="button"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="edit-inventory__btn save-btn"
          type="button"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </section>
  );
}
