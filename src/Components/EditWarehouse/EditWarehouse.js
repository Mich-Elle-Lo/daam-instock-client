import "./EditWarehouse.scss";
import BackArrow from "../../Assets/Icons/arrow_back-24px.svg";

export default function EditWarehouse() {
  return (
    <section className="edit-warehouse">
      <div className="edit-warehouse__title-container">
        <img src={BackArrow} alt="Back Arrow" />
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
          />

          <label className="edit-warehouse__label" htmlFor="streetAddress">
            Street Address
          </label>
          <input
            className="edit-warehouse__input"
            type="text"
            id="streetAddress"
            name="streetAddress"
          />

          <label className="edit-warehouse__label" htmlFor="city">
            City
          </label>
          <input
            className="edit-warehouse__input"
            type="text"
            id="city"
            name="city"
          />

          <label className="edit-warehouse__label" htmlFor="country">
            Country
          </label>
          <input
            className="edit-warehouse__input"
            type="text"
            id="country"
            name="country"
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
          />

          <label className="edit-warehouse__label" htmlFor="position">
            Position
          </label>
          <input
            className="edit-warehouse__input"
            type="text"
            id="position"
            name="position"
          />

          <label className="edit-warehouse__label" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="edit-warehouse__input"
            type="text"
            id="phone"
            name="phone"
          />

          <label className="edit-warehouse__label" htmlFor="email">
            Email
          </label>
          <input
            className="edit-warehouse__input"
            type="text"
            id="email"
            name="email"
          />
        </div>
      </form>
      <div className="edit-warehouse__btn-container">
        <button className="edit-warehouse__btn cancel-btn" type="button">
          Cancel
        </button>
        <button className="edit-warehouse__btn save-btn" type="submit">
          Save
        </button>
      </div>
    </section>
  );
}
