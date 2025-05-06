import React, { useContext } from 'react';
import { ContactContext } from '../context/ContactContext';
import ContactForm from './ContactForm';

const Modal = () => {
  const { modal, dispatch } = useContext(ContactContext);

  if (!modal.isOpen) return null;

  const handleConfirm = () => {
    if (modal.type === 'confirmAdd') {
      dispatch({ type: 'ADD_CONTACT', payload: modal.data });
    } else if (modal.type === 'confirmEdit') {
      dispatch({ type: 'EDIT_CONTACT', payload: modal.data });
    } else if (modal.type === 'delete') {
      dispatch({ type: 'DELETE_CONTACT', payload: modal.data });
    } else if (modal.type === 'deleteSelected') {
      dispatch({ type: 'DELETE_SELECTED', payload: modal.data });
    }
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const handleCancel = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {modal.type === 'add' || modal.type === 'edit' ? (
          <>
            <h2>{modal.type === 'edit' ? 'ویرایش مخاطب' : 'افزودن مخاطب'}</h2>
            <ContactForm onCancel={handleCancel} />
          </>
        ) : (
          <>
            <h2>تأیید عملیات</h2>
            <p>
              {modal.type === 'confirmAdd'
                ? 'آیا از افزودن این مخاطب مطمئن هستید؟'
                : modal.type === 'confirmEdit'
                ? 'آیا از ویرایش این مخاطب مطمئن هستید؟'
                : modal.type === 'delete'
                ? 'آیا از حذف این مخاطب مطمئن هستید؟'
                : 'آیا از حذف مخاطبین انتخاب‌شده مطمئن هستید؟'}
            </p>
            <div className="modal-actions">
              <button className="ripple" onClick={handleConfirm}>تأیید</button>
              <button className="ripple" onClick={handleCancel}>انصراف</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;