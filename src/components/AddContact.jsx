// src/components/AddContact.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../db'; // Import db from your db.js file
import { collection, addDoc } from 'firebase/firestore'; // Import these directly from firebase/firestore

const AddContact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'contacts'), {
        firstName,
        lastName,
        phone,
      });
      console.log('Document written with ID: ', docRef.id);
      navigate('/');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div>
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          required
        />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default AddContact;
