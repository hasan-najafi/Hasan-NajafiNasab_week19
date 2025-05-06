import React, { useContext } from 'react';
import { ContactContext } from '../context/ContactContext';

const ContactMenu = ({ contact, onClose }) => {
  const { dispatch } = useContext(ContactContext);

  const handleEdit = () => {
    dispatch({ type: 'OPEN_MODAL', payload: { type: 'edit', data: contact } });
    onClose();
  };

  const handleDelete = () => {
    dispatch({ type: 'OPEN_MODAL', payload: { type: 'delete', data: contact.id } });
    onClose();
  };

  return (
    <div className="contact-menu">
      <button className="contact-menu-item ripple" onClick={handleEdit}>
        <span className="icon">✎</span> ویرایش
      </button>
      <button className="contact-menu-item ripple" onClick={handleDelete}>
        <span className="icon">🗑</span> حذف
      </button>
      <button className="contact-menu-item ripple" onClick={onClose}>
        <span className="icon">✕</span> انصراف
      </button>
    </div>
  );
};

export default ContactMenu;