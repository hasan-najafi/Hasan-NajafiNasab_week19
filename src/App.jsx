import React from 'react';
import ContactProvider from './context/ContactContext';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';
import Modal from './components/Modal';
import ThemeSelector from './components/ThemeSelector';
import Toolbar from './components/Toolbar';

const App = () => {
  return (
    <ContactProvider>
      <div className="app-container">
        <div className="header">
          <h1>مدیریت مخاطبین</h1>
          <ThemeSelector />
        </div>
        <Toolbar />
        <SearchBar />
        <ContactList />
        <Modal />
      </div>
    </ContactProvider>
  );
};

export default App;