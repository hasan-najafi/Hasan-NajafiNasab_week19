import React, { useContext } from 'react';
import { ContactContext } from '../context/ContactContext';

const Toolbar = () => {
  const {
    dispatch,
    categoryFilter,
    setCategoryFilter,
    exportContacts,
    importContacts,
  } = useContext(ContactContext);

  const handleImport = e => {
    const file = e.target.files[0];
    if (file) importContacts(file);
  };

  return (
    <div className="toolbar">
      <button
        className="toolbar-button ripple"
        onClick={() => dispatch({ type: 'OPEN_MODAL', payload: { type: 'add', data: null } })}
      >
        <span className="icon">+</span> افزودن
      </button>
      <select
        className="toolbar-select"
        value={categoryFilter}
        onChange={e => setCategoryFilter(e.target.value)}
      >
        <option value="all">همه</option>
        <option value="none">بدون دسته‌بندی</option>
        <option value="family">خانواده</option>
        <option value="friends">دوستان</option>
        <option value="work">کار</option>
      </select>
      <button className="toolbar-button ripple" onClick={exportContacts}>
        <span className="icon">↓</span> صادر کردن
      </button>
      <label className="toolbar-button ripple import-button">
        <span className="icon">↑</span> وارد کردن
        <input type="file" accept=".json" onChange={handleImport} hidden />
      </label>
    </div>
  );
};

export default Toolbar;