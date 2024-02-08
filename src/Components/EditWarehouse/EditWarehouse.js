import "./EditWarehouse.scss";
import { useLocation, useNavigate } from "react-router-dom";
import BackArrow from "../../Assets/Icons/arrow_back-24px.svg";

export default function EditWarehouse() {
  const location = useLocation();
  const navigate = useNavigate();

  const { warehouse } = location.state || {};

  //   if (!warehouse) {
  //     return <div>Error: Warehouse data not found.</div>;
  //   }

  const handleCancel = () => {
    navigate("/");
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
            id="warehouseName"
            name="warehouseName"
            value={warehouse.warehouse_name}
          />

          <label className="edit-warehouse__label" htmlFor="streetAddress">
            Street Address
          </label>
          <input
            className="edit-warehouse__input"
            type="text"
            id="streetAddress"
            name="streetAddress"
            value={warehouse.address}
          />

          <label className="edit-warehouse__label" htmlFor="city">
            City
          </label>
          <input
            className="edit-warehouse__input"
            type="text"
            id="city"
            name="city"
            value={warehouse.city}
          />

          <label className="edit-warehouse__label" htmlFor="country">
            Country
          </label>
          <input
            className="edit-warehouse__input"
            type="text"
            id="country"
            name="country"
            value={warehouse.country}
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
            id="contactName"
            name="contactName"
            value={warehouse.contact_name}
          />

          <label className="edit-warehouse__label" htmlFor="position">
            Position
          </label>
          <input
            className="edit-warehouse__input"
            type="text"
            id="position"
            name="position"
            value={warehouse.contact_position}
          />

          <label className="edit-warehouse__label" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="edit-warehouse__input"
            type="text"
            id="phone"
            name="phone"
            value={warehouse.contact_phone}
          />

          <label className="edit-warehouse__label" htmlFor="email">
            Email
          </label>
          <input
            className="edit-warehouse__input"
            type="text"
            id="email"
            name="email"
            value={warehouse.contact_email}
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
        <button className="edit-warehouse__btn save-btn" type="submit">
          Save
        </button>
      </div>
    </section>
  );
}
