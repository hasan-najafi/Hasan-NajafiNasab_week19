import React, { createContext, useReducer, useState, useEffect } from 'react';

export const ContactContext = createContext();

const initialState = {
  contacts: [],
  modal: { isOpen: false, type: '', data: null },
  theme: 'light',
};

const contactReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, { ...action.payload, id: Date.now() }],
      };
    case 'EDIT_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload),
      };
    case 'DELETE_SELECTED':
      return {
        ...state,
        contacts: state.contacts.filter(contact => !action.payload.includes(contact.id)),
      };
    case 'IMPORT_CONTACTS':
      return {
        ...state,
        contacts: [...state.contacts, ...action.payload.map(c => ({ ...c, id: Date.now() + Math.random() }))],
      };
    case 'OPEN_MODAL':
      return {
        ...state,
        modal: { isOpen: true, type: action.payload.type, data: action.payload.data },
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        modal: { isOpen: false, type: '', data: null },
      };
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contactReducer, initialState);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [animatedCount, setAnimatedCount] = useState(0);

  useEffect(() => {
    document.body.setAttribute('data-theme', state.theme);
  }, [state.theme]);

  // انیمیشن شمارش تعداد مخاطبین
  useEffect(() => {
    let start = animatedCount;
    const end = state.contacts.length;
    if (start === end) return;

    const duration = 1000;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));
    let current = start;

    const timer = setInterval(() => {
      current += start < end ? 1 : -1;
      setAnimatedCount(current);
      if (current === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [state.contacts.length, animatedCount]);

  const filteredContacts = state.contacts.filter(
    contact =>
      (contact.firstName.includes(searchTerm) ||
        contact.lastName.includes(searchTerm) ||
        contact.email.includes(searchTerm)) &&
      (categoryFilter === 'all' || contact.category === categoryFilter)
  );

  const exportContacts = () => {
    const dataStr = JSON.stringify(state.contacts);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'contacts.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const importContacts = file => {
    const reader = new FileReader();
    reader.onload = e => {
      try {
        const importedContacts = JSON.parse(e.target.result);
        dispatch({ type: 'IMPORT_CONTACTS', payload: importedContacts });
      } catch (error) {
        alert('خطا در وارد کردن فایل');
      }
    };
    reader.readAsText(file);
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: filteredContacts,
        totalContacts: state.contacts.length,
        animatedCount,
        dispatch,
        searchTerm,
        setSearchTerm,
        categoryFilter,
        setCategoryFilter,
        modal: state.modal,
        theme: state.theme,
        exportContacts,
        importContacts,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;