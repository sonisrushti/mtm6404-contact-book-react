// src/components/ContactDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../db';

// Inside src/components/ContactDetails.jsx



const ContactDetails = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      const contactDoc = await getDoc(doc(db, 'contacts', id));
      setContact(contactDoc.data());
    };

    fetchContact();
  }, [id]);

  if (!contact) return <div>Loading...</div>;
  
  return (
    <div>
      <h1>{contact.firstName} {contact.lastName}</h1>
      <p>Email: {contact.email}</p>
      <Link to={`/edit/${id}`}>Edit</Link>
      <Link to="/">Back to List</Link>
    </div>



  );

};

export default ContactDetails;