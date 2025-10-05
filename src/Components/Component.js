// FormControls.js
import React, { useState } from 'react';

/** Text Box */
export const TextBox = ({ name, label, value, onChange, placeholder }) => (
  <div>
    <label>{label}</label><br />
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

/** Textarea */
export const TextArea = ({ name, label, value, onChange, placeholder }) => (
  <div>
    <label>{label}</label><br />
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

/** Select Box (ComboBox) */
export const ComboBox = ({ name, label, value, onChange, options }) => (
  <div>
    <label>{label}</label><br />
    <select name={name} value={value} onChange={onChange}>
      <option value="">Select</option>
      {options.map((opt, i) => (
        <option key={i} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

/** Autocomplete Input */
export const Autocomplete = ({ name, label, value, onChange, options, placeholder }) => {
  const [inputValue, setInputValue] = useState(value || '');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const val = e.target.value;
    setInputValue(val);
    setSuggestions(options.filter(opt =>
      opt.toLowerCase().includes(val.toLowerCase())
    ));
    onChange({ target: { name, value: val } });
  };

  const selectSuggestion = (val) => {
    setInputValue(val);
    setSuggestions([]);
    onChange({ target: { name, value: val } });
  };

  return (
    <div>
      <label>{label}</label><br />
      <input
        type="text"
        name={name}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {suggestions.length > 0 && (
        <ul style={{ border: '1px solid #ccc', marginTop: 0 }}>
          {suggestions.map((opt, i) => (
            <li key={i} onClick={() => selectSuggestion(opt)} style={{ cursor: 'pointer' }}>
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

/** Checkbox */
export const Checkbox = ({ name, label, checked, onChange }) => (
  <div>
    <label>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  </div>
);

/** Radio Buttons */
export const RadioGroup = ({ name, label, options, value, onChange }) => (
  <div>
    <label>{label}</label><br />
    {options.map((opt, i) => (
      <label key={i} style={{ marginRight: '10px' }}>
        <input
          type="radio"
          name={name}
          value={opt}
          checked={value === opt}
          onChange={onChange}
        />
        {opt}
      </label>
    ))}
  </div>
);

/** Date Picker */
export const DatePicker = ({ name, label, value, onChange }) => (
  <div>
    <label>{label}</label><br />
    <input
      type="date"
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
);

/** File Upload */
export const FileInput = ({ name, label, onChange }) => (
  <div>
    <label>{label}</label><br />
    <input
      type="file"
      name={name}
      onChange={onChange}
    />
  </div>
);
