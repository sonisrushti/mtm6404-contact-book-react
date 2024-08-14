// src/components/ContactList.jsx
import React, { useEffect, useState } from 'react';
import { db, collection, getDocs, query, where } from '../db'; // Ensure the path is correct

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        let q = query(collection(db, 'contacts'));

        if (search) {
          q = query(q, where('name', '==', search));
        }

        const querySnapshot = await getDocs(q);
        const contactsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(contactsList);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, [search]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search contacts"
      />
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
