// src/components/EditContact.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../db';

import { deleteDoc } from 'firebase/firestore';

const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchContact = async () => {
      const contactDoc = await getDoc(doc(db, 'contacts', id));
      const contact = contactDoc.data();
      setFirstName(contact.firstName);
      setLastName(contact.lastName);
      setEmail(contact.email);
    };

    fetchContact();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDoc(doc(db, 'contacts', id), { firstName, lastName, email });
    navigate(`/contact/${id}`);
  };

  const handleDelete = async () => {
    await deleteDoc(doc(db, 'contacts', id));
    navigate('/');
  };

  return (
    <div>
      <h1>Edit Contact</h1>
      <form onSubmit={handleSubmit}>
        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <button type="submit">Update</button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </div>

  );
};

export default EditContact;