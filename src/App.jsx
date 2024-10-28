// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [Errors , setErrors] =useState({})
//   const [formvalue , setformvalue ] = useState({
//     firstName : "",
//     lastName :"",
//     textArea : "",
//     mail : ""
//   })
//    const handleSubmit =(e)=>{
//      e.preventDefault();
     
//    }
//    const handleInput = (e)=>{
//     const {name , value } = e.target
//     setformvalue({...formvalue , [name]:value })
//     console.log(formvalue)
//    }
   
//    const validation = () =>{
//     let Errors = {}

//     if (!firstName){
//       Errors.firstName= "this field is required"
//     };
//     if(!lastName){
//       Errors.lastName = "this field is required"
//     };
//     if(!mail){
//       Errors.mail ="this field is required"
//     };
//     if(!textArea){
//       Errors.textArea ="this field is required"
//     };
//     return Errors
//    }
//    useEffect(()=>{
//     console.log(Errors)
//     if(Object.keys(Errors).length === 0  && isSubmitted){
//       console.log(formvalue)
//     } },[formErrrors])
   
  
//    return (
//     <div className="bg-lightGreen flex justify-center w-full px-4 py-6">
//   <div className="w-full max-w-4xl">
//     <h3 className="font-bold capitalize text-2xl md:text-3xl text-center">contact us</h3>

//     <form action="" className="mt-8 bg-white p-4 rounded-lg shadow-md" onSubmit={handleSubmit}>
//           <div className="flex flex-col md:flex-row md:space-x-4">
        
//         <div className="m-4 w-full md:w-1/2 input">
//           <h3 className="font-semibold capitalize mb-2">first name*</h3>
//           <input type="text" className="w-full bg-transparent p-2 border border-gray-300 rounded-md focus:outline-none " value={formvalue.firstName} name="firstName" onChange={handleInput} />
//         </div>

//         <div className="m-4 w-full md:w-1/2">
//           <h3 className="font-semibold capitalize mb-2">first name*</h3>
//           <input type="text" className="w-full bg-transparent p-2 border border-gray-300 rounded-md focus:outline-none" value={formvalue.lastName} name="lastName" onChange={handleInput} />
//         </div>
      
//       </div>


//       <div className="m-4">
//         <h3 className="font-semibold capitalize mb-2">email address*</h3>
//         <input type="email" className="w-full bg-transparent p-2 border border-gray-300 rounded-md focus:outline-none" name='mail' value={formvalue.mail}  onChange={handleInput}/>
//       </div>
    
//           <div className="flex flex-col md:flex-row md:space-x-4">
//       <div className="w-full md:w-1/2 mb-4 md:mb-0 border border-gray-700 rounded-lg p-4">
//         <input type="radio" className="mr-2" name="requestType" />
//         <label className="font-semibold capitalize">general request</label>
//       </div>
      
//       <div className="w-full md:w-1/2 border border-gray-700 rounded-lg p-4">
//         <input type="radio" className="mr-2" name="requestType" />
//         <label className="font-semibold capitalize">support request</label>
//       </div>
//     </div>

//       <div className="m-4">
//         <h3 className="font-semibold capitalize mb-2">message*</h3>
//         <textarea className="w-full border border-gray-300 rounded-md p-3 h-32 resize-none bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"  value={formvalue.textArea} name='textArea' onChange={handleInput} ></textarea>
//       </div>

//       <div className="m-4 flex items-center">
//         <input type="checkbox" className="mr-2" />
//         <label className="font-semibold capitalize text-sm sm:text-base md:text-lg lg:text-xl block sm:inline">
//        I consent to be contacted by the team
//       </label>

//       </div>

//       <button className="w-full bg-darkGreen text-white capitalize p-3  rounded-md">submit</button>
//     </form>
//   </div>
// </div>

   
//   )
// }

// export default App

import React, { useState } from 'react';

const ContactForm = () => {
  // State for form fields and errors
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    requestType: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Validate the form
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

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const validationErrors = validateForm(); // Validate the form
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors if validation fails
    } else {
      setErrors({}); // Clear errors if validation passes
      alert('Form submitted successfully!'); // Replace with actual form submission logic
      // Optionally reset the form
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
        <h3 className="font-bold capitalize text-2xl md:text-3xl text-center text-darkGreen">contact us</h3>
        <form onSubmit={handleSubmit} className="mt-8 bg-white p-6 rounded-lg shadow-lg">
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
      </div>
    </div>
  );
};

export default ContactForm;

