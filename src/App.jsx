// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ContactDetails from './components/ContactDetails';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import ContactList from './components/contactlist';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/contact/:id" element={<ContactDetails />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:id" element={<EditContact />} />
      </Routes>
    </Router>
  );
}

export default App;