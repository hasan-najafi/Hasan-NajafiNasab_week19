import React, { useContext, useState } from "react";
import { ContactContext } from "../context/ContactContext";
import ContactMenu from "./ContactMenu";

const ContactList = () => {
  const { contacts, animatedCount, dispatch } = useContext(ContactContext);
  const [selected, setSelected] = useState([]);
  const [menuOpen, setMenuOpen] = useState(null);

  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const handleDeleteSelected = () => {
    dispatch({
      type: "OPEN_MODAL",
      payload: { type: "deleteSelected", data: selected },
    });
  };

  const toggleMenu = (id) => {
    setMenuOpen(menuOpen === id ? null : id);
  };

  return (
    <div className="contact-list">
      <div className="list-header">
        <p className="count-animation">تعداد مخاطبین: {animatedCount}</p>
      </div>
      {selected.length > 0 && (
        <button
          className="delete-selected ripple"
          onClick={handleDeleteSelected}
        >
          حذف انتخاب‌شده‌ها ({selected.length})
        </button>
      )}
      {contacts.length === 0 ? (
        <p>مخاطبی یافت نشد</p>
      ) : (
        <ul>
          {contacts.map((contact, index) => (
            <li
              key={contact.id}
              className="contact-card ripple"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <input
                type="checkbox"
                checked={selected.includes(contact.id)}
                onChange={() => handleSelect(contact.id)}
              />
              <div className="contact-info">
                <span className="contact-name">
                  <span className="contact-icon">👤</span>
                  {contact.firstName} {contact.lastName}
                  <button
                    className="menu-button ripple"
                    onClick={() => toggleMenu(contact.id)}
                  >
                    ⋮
                  </button>
                  {menuOpen === contact.id && (
                    <ContactMenu
                      contact={contact}
                      onClose={() => setMenuOpen(null)}
                    />
                  )}
                </span>
                <span>
                  <span className="contact-icon">✉️</span>
                  {contact.email}
                </span>
                <span>
                  <span className="contact-icon">📞</span>
                  {contact.phone}
                </span>
                <span className="category">
                  <span className="contact-icon">🏷️</span>
                  {contact.category === "none"
                    ? "بدون دسته‌بندی"
                    : contact.category === "family"
                    ? "خانواده"
                    : contact.category === "friends"
                    ? "دوستان"
                    : "کار"}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
