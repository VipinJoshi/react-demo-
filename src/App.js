import React, { useState } from 'react';
import InputFields from './Components/InputField';
import './style.css';

export default function App() {
  const handleOnSubmit = () => {
    event.stopPropagation();
    return;
  };
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState(0);
  const [error, setError] = useState(null);
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="input">
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="employee">Emp Name</label>
        <input
          id="empName"
          type="text"
          value={userName}
          onChange={handleUserNameChange}
        />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={age} onChange={handleAgeChange} />
        <InputFields labelText="Department" type="text" id="department" />
        <InputFields labelText="Salary" type="number" id="salary" />
        <button type="submit"> Add Employee</button>
      </form>
    </div>
  );
}
