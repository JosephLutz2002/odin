import React, { useState } from 'react';
const api = require('../utils/api')
import '../globals.css'
const AddModuleForm = ({ onClose, onAddModule }) => {
  const [moduleName, setModuleName] = useState('');
  const [moduleID, setModuleID] = useState('');
  const [year, setYear] = useState('');
  const [code, setCode] = useState('')

  const handleSubmit = async () => {
    const t = await api.createModule(moduleName,year,code)
    const newModule = {
      name: moduleName,
      id: t['id'],
      year,
      code:code,
      mark:0
    };
    onAddModule(newModule);

    setModuleName('');
    setModuleID('');
    setYear('');
    setCode('')
    onClose();
  };

  return (
    <div className="add-module-form">
      <h2>Add New Module</h2>
      <label>
        Module Name:
        <input type="text" value={moduleName} onChange={(e) => setModuleName(e.target.value)} />
      </label>
      <label>
        Module code:
        <input type="text" value={code} onChange={(e) => setCode(e.target.value)} />
      </label>
      <label>
        Year:
        <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
      </label>
      <button onClick={handleSubmit} className='mr-2 ml-2'>Add Module</button>
      <button onClick={onClose}  className='mr-2 ml-2'>Close</button>
    </div>
  );
};

export default AddModuleForm;
