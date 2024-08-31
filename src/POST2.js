


import React, { useState } from 'react';
import N from './NAVBAR2A';
import './POST2.css';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

function POST2() {
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [forms, setForms] = useState([]);

  var name=""
  var age=""
  const handleNumberOfPeopleChange = (e) => {
    setNumberOfPeople(parseInt(e.target.value, 10));
  };

  const onToken = (token) => {
        fetch('/save-stripe-token', {
          method: 'POST',
          body: JSON.stringify(token),
        })
          .then((response) => response.json())
          .then((data) => {
            alert(`We are in business, ${data.email}`);
          })
          .catch((error) => console.error('Error:', error));
      };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newForms = [];
    for (let i = 0; i < numberOfPeople; i++) {
      newForms.push(
        <form key={i} className="f1_p1" method="post">
          <label className="label_1">NAME :</label>
          <input
            type="text"
            className="form_b2a"
            placeholder="     Enter name"
            name={`name-${i}`}
            onChange={(e) => name=e.target.value}
          />
          <label className="label_1">AGE :</label>
          <input
            type="text"
            className="form_b3a"
            placeholder="Enter age"
            name={`age-${i}`}
            onChange={(e) => age=e.target.value}
          />
          <button className="btn_button" onClick={(e) => click(e)}>
            confirm details
          </button>
        </form>
      );
    }
    setForms(newForms);
  };

  const click = async(e) => {
    e.preventDefault();
    // alert(`Name: ${name}, Age: ${age}`);

    const a={
      name,
      age,
    }

      try {
      await axios.post('http://localhost:4000/signup',a);
      alert('User signed up successfully.');
      
      }
      catch (error) {
      console.error('Error signing up:', error);
      alert('An error occurred.');
      }
    
  };

  return (
    <>
      <N />
      <div className="containerp_1">
        <form className="f1_p1" onSubmit={handleSubmit}>
          <label className="label_1">HOW MANY PEOPLE :</label>
          <input
            type="number"
            placeholder="   NUMBER OF PEOPLE"
            className="form_b1a"
            onChange={handleNumberOfPeopleChange}
          />
          <input type="submit" className="btn_button" />
        </form>

        {forms.map((form, index) => (
          <div key={index}>{form}</div>
        ))}
        <form className="f1_p12" onSubmit={handleSubmit}>
         <StripeCheckout
            className="btn__button"
            token={onToken}
            stripeKey="pk_test_51Nvt38SILmKyLRiKx0dCXM5ISSuA8kOOlGhHgcE8c54qlEXIhENQ0b6U5Imr5878AlMAs9RqPOjNtG7eLOuH8BAw00jVHM8xYB"
          />
        </form>
      </div>
    </>
  );
}

export default POST2;


