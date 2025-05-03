import React, { useState } from 'react';
import "./App.css";

const App: React.FC = () => {
  const [Values, setValues] = useState({
    name: "",
    contactNumber: "",
    mail: "",
    message: "",
  });

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, contactNumber, mail, message } = Values;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numberRegex = /^\d{10}$/;

    if (!name || !contactNumber || !mail || !message) {
      alert("All fields are required.");
      return;
    }

    if (!emailRegex.test(mail)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!numberRegex.test(contactNumber)) {
      alert("Contact number must be exactly 10 digits.");
      return;
    }

    console.log(Values);

    alert("Form submitted successfully!");

    // Reset form values
    setValues({ 
      name: "", 
      contactNumber: "", 
      mail: "", 
      message: "" });
  };

  return (
    <div className='form d-flex justify-content-center align-items-center'>
      <div className='contact-card px-3 py-2'>
        <h1>locker rOOm</h1>

        <form onSubmit={handleSubmit} className='contact-form'>
          <div>
            <h5>Your Name</h5>
            <input
              type='text'
              name='name'
              value={Values.name}
              onChange={change}
            />
          </div>

          <div>
            <h5>Contact Number</h5>
            <input
              type='text'
              name='contactNumber'
              value={Values.contactNumber}
              onChange={change}
            />
          </div>

          <div>
            <h5>E-Mail</h5>
            <input
              type='text'
              name='mail'
              value={Values.mail}
              onChange={change}
            />
          </div>

          <div>
            <h5>Message for Me</h5>
            <textarea
              name='message'
              value={Values.message}
              onChange={change}
            />
          </div>

          <button type='submit' className='submit-btn'>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default App;
