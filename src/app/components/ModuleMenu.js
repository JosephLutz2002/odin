import React from 'react';
import CustomTable from './moduleTable';
const CustomMenu = ({ module, onClose , updateModuleMark}) => {
    

  return (
    <div className="custom-menu">
      <h3>Selected Module Details</h3>
      {module && (
        <div>
          <p>
            <strong>Name:</strong> {module.name}
          </p>
          <p>
            <strong>Year:</strong> {module.year}
          </p>
          <p>
            <strong>Code:</strong> {module.code}
          </p>
          <p>
            <strong>Mark:</strong> {module.mark}
          </p>
        </div>
        
      )}
      <CustomTable module={module} updateModuleMark={updateModuleMark}></CustomTable>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default CustomMenu;
