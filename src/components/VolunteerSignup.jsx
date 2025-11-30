import React, { useState } from "react";

function VolunteerSignup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    availability: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    setSubmitted(true);

    // Clear form after submitting
    setFormData({
      name: "",
      email: "",
      phone: "",
      availability: "",
      message: "",
    });
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Volunteer With Us</h2>

          {submitted && (
            <div className="alert alert-success">
              ✨ Thank you for showing interest! We will get in touch with you
              soon.
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="border rounded p-4 shadow-sm bg-white"
          >
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Availability</label>
              <select
                name="availability"
                className="form-control"
                value={formData.availability}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Only Weekends">Only Weekends</option>
                <option value="Occasionally">Occasionally</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Message (Optional)</label>
              <textarea
                className="form-control"
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VolunteerSignup;
