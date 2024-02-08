import "./EditWarehouse.scss";
import BackArrow from "../../Assets/Icons/arrow_back-24px.svg";

export default function EditWarehouse() {
  return (
    <section className="edit-warehouse">
      <div className="edit__title-container">
        <img src={BackArrow} alt="Back Arrow" />
        <h1>Edit Warehouse</h1>
      </div>
      <form className="edit-warehouse__form">
        <div className="edit__warehouse-details">
          <h3>Warehouse Details</h3>
          <label htmlFor="warehouseName">Warehouse Name</label>
          <input type="text" id="warehouseName" name="warehouseName" />

          <label htmlFor="streetAddress">Street Address</label>
          <input type="text" id="streetAddress" name="streetAddress" />

          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" />

          <label htmlFor="country">Country</label>
          <input type="text" id="country" name="country" />
        </div>
        <div className="edit__contact-details">
          <h3>Contact Details</h3>
          <label htmlFor="contactName">Contact Name</label>
          <input type="text" id="contactName" name="contactName" />

          <label htmlFor="position">Position</label>
          <input type="text" id="position" name="position" />

          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" name="phone" />

          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
        </div>
        <div>
          <button type="button">Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </section>
  );
}
