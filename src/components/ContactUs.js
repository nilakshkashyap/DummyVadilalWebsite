import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = ({ contactImg }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    occupation: "",
    interest: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
    } else if (!formData.phone) {
      errors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number is invalid";
    } else if (!formData.company) {
      errors.company = "Company is required";
    } else if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        occupation: "",
        interest: "",
        message: "",
      });
    }
  };

  return (
    <div className="contact-container">
      <div className="address">
        <img src={contactImg} alt="Contact" className="address-img" />
        <div className="address-text">
          <h1>CORPORATE OFFICE</h1>
          <h2>Vadilal House</h2>
          <p>
            Vadilal Enterprises Ltd., Nr. Navrangpura Rly Crossing, Navrangpura,
            Ahmedabad - 9, Gujarat, INDIA
            <br />
            <br />
            Tel: +91 79 26564018 to 24
            <br />
            <br />
            Fax : +91 79 26564027
            <br />
            <br />
            E-mail: info@vadilalgroup.com
          </p>
        </div>
      </div>
      <div className="form">
        <div className="form-head">Reach Out To Us</div>
        <form onSubmit={handleSubmit}>
          <div className="form-cols">
            <div className="form-col1">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className={`form-name ${formErrors.name ? "error" : ""}`}
                value={formData.name}
                onChange={handleInputChange}
              />
              {formErrors.name && (
                <span className="error-message1">
                  <br />
                  {formErrors.name}
                </span>
              )}
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company"
                className={`form-company ${formErrors.company ? "error" : ""}`}
                value={formData.company}
                onChange={handleInputChange}
              />

              {formErrors.company && (
                <span className="error-message2">{formErrors.company}</span>
              )}
            </div>
            <div className="form-col2">
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone"
                className={`form-phone ${formErrors.phone ? "error" : ""}`}
                value={formData.phone}
                onChange={handleInputChange}
              />
              {formErrors.phone && (
                <span className="error-message1">
                  <br />
                  {formErrors.phone}
                </span>
              )}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className={`form-email ${formErrors.email ? "error" : ""}`}
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.email && (
                <span className="error-message2">
                  <br />
                  {formErrors.email}
                </span>
              )}
            </div>
            <div className="form-col3">
              <input
                type="text"
                id="occupation"
                name="occupation"
                placeholder="Occupation"
                className="form-occupation"
                value={formData.occupation}
                onChange={handleInputChange}
              />
              <input
                type="text"
                id="interest"
                name="interest"
                placeholder="Interested In"
                className="form-interest"
                value={formData.interest}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-cols2">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="form-message"
              value={formData.message}
              onChange={handleInputChange}
              min-height="120px"
            />
          </div>
          <button type="submit" className="form-button">
            Send
          </button>
        </form>
        {submitted && (
          <div className="submitted-message">Form submitted successfully!</div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
