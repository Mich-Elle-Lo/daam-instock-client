import React, { useState } from "react";
import { ReactComponent as ArrowBack } from "../../Assets/Icons/arrow_back-24px.svg";
import { ReactComponent as Error } from "../../Assets/Icons/error-24px.svg";
import "./AddWarehouse.scss";

const AddWarehouse = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!address.trim()) {
      errors.address = "Address is required";
      isValid = false;
    }

    if (!phoneNumber.trim()) {
      errors.phoneNumber = "Phone Number is required";
      isValid = false;
    } else if (!validatePhoneNumber(phoneNumber)) {
      errors.phoneNumber = "Invalid Phone Number";
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(email)) {
      errors.email = "Invalid Email";
      isValid = false;
    }

    if (!contactName.trim()) {
      errors.contactName = "Contact Name is required";
      isValid = false;
    }

    if (!position.trim()) {
      errors.position = "Position is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit form to backend
      console.log("Form submitted successfully");
    } else {
      console.log("Form validation failed");
    }
  };

  const handleCancel = () => {
    // Implement cancel action here
    console.log("Cancel action triggered");
  };

  return (
    <section className="add">
      <div className="add__title--container">
        <h1 className="add__title">
          <ArrowBack className="add__icon" alt="arrow back" />
          Add New Warehouse
        </h1>
      </div>

      <form className="add__form" onSubmit={handleSubmit}>
        <div className="add__wd">
          <div className="add__section">
            <h2 className="add__section-title">Warehouse Details</h2>
            <label
              className="add__label"
              htmlFor="name"
              autoComplete="warehouseName"
            >
              Warehouse Name
            </label>
            <input
              className={`add__input ${formErrors.name ? "error" : ""}`}
              type="text"
              id="warehouse-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Warehouse Name"
              autoComplete="warehouse-name"
            />
            {formErrors.name && (
              <span className="add__error">
                <Error className="add__error--icon" alt="Error" />
                {formErrors.name}
              </span>
            )}
          </div>
          <div className="add__section">
            <label
              className="add__label"
              htmlFor="address"
              autoComplete="streetAddress"
            >
              Street Address
            </label>
            <input
              className={`add__input ${formErrors.address ? "error" : ""}`}
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Street Address"
              autoComplete="address"
            />

            {formErrors.address && (
              <span className="add__error">
                <Error className="add__error--icon" alt="Error" />
                {formErrors.address}
              </span>
            )}
          </div>
          <div className="add__section">
            <label className="add__label" htmlFor="city" autoComplete="city">
              City
            </label>
            <input
              className={`add__input ${formErrors.city ? "error" : ""}`}
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              autoComplete="city"
            />
          </div>
          <div className="add__section">
            <label
              className="add__label"
              htmlFor="country"
              autoComplete="country"
            >
              Country
            </label>
            <input
              className={`add__input ${formErrors.country ? "error" : ""}`}
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country"
              autoComplete="country"
            />
          </div>
        </div>
        <div className="add__cd">
          <div className="add__section">
            <h2 className="add__section-title">Contact Details</h2>
            <label
              className="add__label"
              htmlFor="contactName"
              autoComplete="contactName"
            >
              Contact Name
            </label>
            <input
              className={`add__input ${formErrors.contactName ? "error" : ""}`}
              type="text"
              id="contactName"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              placeholder="Contact Name"
              autoComplete="contactName"
            />
            {formErrors.contactName && (
              <span className="add__error">
                <Error className="add__error--icon" alt="Error" />
                {formErrors.contactName}
              </span>
            )}
          </div>
          <div className="add__section">
            <label
              className="add__label"
              htmlFor="position"
              autoComplete="position"
            >
              Position
            </label>
            <input
              className={`add__input ${formErrors.position ? "error" : ""}`}
              type="text"
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              placeholder="Position"
              autoComplete="Position"
            />
            {formErrors.position && (
              <span className="add__error">
                <Error className="add__error--icon" alt="Error" />
                {formErrors.position}
              </span>
            )}
          </div>
          <div className="add__section">
            <label
              className="add__label"
              htmlFor="phoneNumber"
              autoComplete="phoneNumber"
            >
              Phone Number
            </label>
            <input
              className={`add__input ${formErrors.phoneNumber ? "error" : ""}`}
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
              autoComplete="PhoneNumber"
            />

            {formErrors.phoneNumber && (
              <span className="add__error">
                <Error className="add__error--icon" alt="Error" />
                {formErrors.phoneNumber}
              </span>
            )}
          </div>
          <div className="add__section">
            <label className="add__label" htmlFor="email" autoComplete="email">
              Email
            </label>
            <input
              className={`add__input ${formErrors.email ? "error" : ""}`}
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              autoComplete="email"
            />
            {formErrors.email && (
              <span className="add__error">
                <Error className="add__error--icon" alt="Error" />
                {formErrors.email}
              </span>
            )}
          </div>
        </div>
        <div className="add__button--container">
          <button
            className="add__button--cancel"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button className="add__button--add" type="submit">
            + Add Warehouse
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddWarehouse;
