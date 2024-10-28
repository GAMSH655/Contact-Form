import React, { useState } from 'react';

// SVG for the checked icon
const CheckmarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-green-500"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm5.66 7.66a1 1 0 00-1.41 0L10 12.25l-2.25-2.25a1 1 0 10-1.41 1.41l3 3a1 1 0 001.41 0l5-5a1 1 0 000-1.41z"
      clipRule="evenodd"
    />
  </svg>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    requestType: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [showOverlay, setShowOverlay] = useState(false); 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.lastName) newErrors.lastName = 'Last name is required.';
    if (!formData.firstName) newErrors.firstName = 'First name is required.';
    if (!formData.email) {
      newErrors.email = 'Email address is required.';
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }
    if (!formData.requestType) newErrors.requestType = 'Please select a request type.';
    if (!formData.message) newErrors.message = 'Message is required.';
    if (!formData.consent) newErrors.consent = 'You must consent to be contacted.';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setShowOverlay(true);
      setTimeout(() => {
        setShowOverlay(false);
      }, 3000);
      
      setFormData({
        lastName: '',
        firstName: '',
        email: '',
        requestType: '',
        message: '',
        consent: false,
      });
    }
  };

  return (
    <div className="bg-lightGreen flex justify-center w-full px-4 py-6">
      <div className="w-full max-w-4xl">
        <form onSubmit={handleSubmit} className="mt-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="font-bold capitalize text-2xl md:text-3xl text-darkGreen font-roboto">contact us</h3>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="m-2 md:m-4 w-full md:w-1/2">
              <h3 className="font-semibold capitalize mb-2">last name*</h3>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-transparent p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen transition duration-300"
              />
              {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
            </div>
            <div className="m-2 md:m-4 w-full md:w-1/2">
              <h3 className="font-semibold capitalize mb-2">first name*</h3>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-transparent p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen transition duration-300"
              />
              {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
            </div>
          </div>

          <div className="m-2 md:m-4">
            <h3 className="font-semibold capitalize mb-2">email address*</h3>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-darkGreen transition duration-300"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          <div className="flex flex-col md:flex-row justify-between">
            <div className="m-2 md:m-4 w-full md:w-1/2 border-2 border-gray-700 rounded-lg p-4 flex items-center">
              <input
                type="radio"
                name="requestType"
                value="general"
                checked={formData.requestType === 'general'}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="font-semibold capitalize">general request</label>
            </div>
            <div className="m-2 md:m-4 w-full md:w-1/2 border-2 border-gray-700 rounded-lg p-4 flex items-center">
              <input
                type="radio"
                name="requestType"
                value="support"
                checked={formData.requestType === 'support'}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="font-semibold capitalize">support request</label>
            </div>
          </div>
          {errors.requestType && <p className="text-red-500">{errors.requestType}</p>}

          <div className="m-2 md:m-4">
            <h3 className="font-semibold capitalize mb-2">message*</h3>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 h-32 resize-none bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-darkGreen transition duration-300"
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>

          <div className="m-2 md:m-4 flex items-center">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="font-semibold capitalize">i consent to be contacted by the team</label>
          </div>
          {errors.consent && <p className="text-red-500">{errors.consent}</p>}

          <button className="w-full bg-darkGreen text-white capitalize p-3 m-4 rounded-md hover:bg-lightDarkGreen transition duration-300">
            submit
          </button>
        </form>

        {showOverlay && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg shadow-lg flex items-center">
              <CheckmarkIcon />
              <span className="ml-2 text-lg">Message sent! We will get in touch with you.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
