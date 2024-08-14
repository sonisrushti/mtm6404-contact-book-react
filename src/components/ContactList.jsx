// src/components/ContactList.jsx
import React, { useEffect, useState } from 'react';
import { db, collection, getDocs, query, where } from '../db';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);

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
        
        console.log('Fetched contacts:', contactsList); // Add this line
        setContacts(contactsList);
      } catch (error) {
        console.error('Error fetching contacts:', error);
        setError('Failed to fetch contacts. Please check your Firestore rules and configuration.');
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
      {error && <p>{error}</p>}
      <ul>
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name} - {contact.phone}
            </li>
          ))
        ) : (
          <li>No contacts found</li>
        )}
      </ul>
    </div>
  );
};

export default ContactList;
