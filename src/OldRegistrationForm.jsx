import React, { useState } from 'react';

const OldRegistrationForm = () => {
  const genderOptions = [
    { id: 'm', label: 'Male' },
    { id: 'f', label: 'Female' },
    { id: 'o', label: 'Others' }
  ];

  const hobbyOptions = [
    { id: 'h1', label: 'Music' },
    { id: 'h2', label: 'Movies' },
    { id: 'h3', label: 'Plastic Model' }
  ];

  const roleOptions = [
    { value: 'General staff', label: 'General staff' },
    { value: 'Developer', label: 'Developer' },
    { value: 'System Analyst', label: 'System Analyst' }
  ];

  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    gender: '',
    role: 'General staff'
  });
  
  const [hobbies, setHobbies] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onHobbiesToggle = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setHobbies([...hobbies, value]);
    } else {
      setHobbies(hobbies.filter((h) => h !== value));
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h2>Registration Form</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
        <label>Username: <input type="text" name="username" onChange={handleChange} /></label>
        <label>Firstname: <input type="text" name="firstname" onChange={handleChange} /></label>
        <label>Lastname: <input type="text" name="lastname" onChange={handleChange} /></label>
        
        <div>
          <label>Gender: </label>
          {genderOptions.map(opt => (
            <label key={opt.id} style={{ marginRight: '10px' }}>
              <input type="radio" name="gender" value={opt.label} onChange={handleChange} /> {opt.label}
            </label>
          ))}
        </div>

        <div>
          <label>Hobbies: </label>
          {hobbyOptions.map(h => (
            <label key={h.id} style={{ marginRight: '10px' }}>
              <input type="checkbox" value={h.label} onChange={onHobbiesToggle} /> {h.label}
            </label>
          ))}
        </div>

        <label>Apply Role: 
          <select name="role" onChange={handleChange}>
            {roleOptions.map(r => (
              <option key={r.value} value={r.value}>{r.label}</option>
            ))}
          </select>
        </label>
      </div>

      <hr style={{ width: '100%', margin: '20px 0' }} />

      <div style={{ textAlign: 'left', background: 'transparent' }}>
        <p><strong>Username:</strong> {formData.username}</p>
        <p><strong>Firstname:</strong> {formData.firstname}</p>
        <p><strong>Lastname:</strong> {formData.lastname}</p>
        <p><strong>Gender:</strong> {formData.gender}</p>
        <p><strong>Hobbies:</strong> {hobbies.join(", ")}</p>
        <p><strong>Role:</strong> {formData.role}</p>
      </div>
    </div>
  );
};

export default OldRegistrationForm;