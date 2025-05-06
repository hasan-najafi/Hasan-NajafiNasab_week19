import React, { useContext } from 'react';
import { ContactContext } from '../context/ContactContext';

const AddContactButton = () => {
  const { dispatch } = useContext(ContactContext);

  return (
    <button
      className="add-contact-button"
      onClick={() => dispatch({ type: 'OPEN_MODAL', payload: { type: 'add', data: null } })}
    >
      افزودن مخاطب
    </button>
  );
};

export default AddContactButton;