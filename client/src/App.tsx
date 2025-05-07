import React, { useState } from 'react';
import axios from 'axios';
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

    try {
      const response = await axios.post("http://localhost:5000/api/message", {
        name,
        contactNumber,
        mail,
        message
      });

      alert("Form submitted successfully!");
      console.log(response.data);

      setValues({
        name: "",
        contactNumber: "",
        mail: "",
        message: ""
      });
    } catch (error: any) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className='form'>
      <div className='logo-container'>
        <img
          src="https://images.steamusercontent.com/ugc/481146537300460925/44352B4287F4B53D14447A3E35F062FFEE50F41D/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
          alt="Logo"
          className="logo-img"
        />
        <h1 className="heading">Connect ME</h1>
      </div>

      <form onSubmit={handleSubmit} className='contact-form'>
        <div className='form-group'>
          <h5>Your Name</h5>
          <input
            type='text'
            name='name'
            value={Values.name}
            onChange={change}
          />
        </div>

        <div className='form-group'>
          <h5>Contact Number</h5>
          <input
            type='text'
            name='contactNumber'
            value={Values.contactNumber}
            onChange={change}
          />
        </div>

        <div className='form-group'>
          <h5>E-Mail</h5>
          <input
            type='text'
            name='mail'
            value={Values.mail}
            onChange={change}
          />
        </div>

        <div className='form-group'>
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
  );
};

export default App;
