'use client'
import React, { useEffect, useState } from 'react';
import AddModuleForm from '../components/addModule';
const api = require('../utils/api')
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const MainComponent = () => {
  const [showForm, setShowForm] = useState(false);
  const [modules, setModules] = useState([]);
  const [newModule, setNewModule] = useState({
    name: '',
    id: '',
    year: '',
    code:''
  });

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await api.getAllModules()
        const ModuleArray = []
        for(let i = 0;i<response.Modules.length;i++){
          const module = {
            name:response.Modules[i][1],
            id:response.Modules[i][0],
            year:response.Modules[i][2],
            code:response.Modules[i][3]
          }
          console.log(module)
          ModuleArray.push(module)
        }
        console.log(ModuleArray)
        setModules(ModuleArray)
      } catch (error) {
        
      }
    };

    // Call the fetchModules function when the component mounts (e.g., when the user logs in)
    fetchModules();
  }, []);  
  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const addModule = (module) => {
    setModules([...modules, module]);
    closeForm();
  };

  const handleDeleteModule = async (index) => {
    const deletedModuleId = modules[index].id;
    if (await api.deleteModule(deletedModuleId)){
      console.log('Module Successfully deleted')
    }
    const updatedModules = [...modules];
    updatedModules.splice(index, 1);
    setModules(updatedModules);
  
    // Log the ID of the deleted module
    console.log(`Deleted module with ID: ${deletedModuleId}`);
  };
  

  return (
    <div>
      <button onClick={openForm}>Open Form</button>
      {showForm && (
        <AddModuleForm
          newModule={newModule}
          setNewModule={setNewModule}
          onClose={closeForm}
          onAddModule={addModule}
        />
      )}
     <div>
  <h2>Modules</h2>
  <ul className="modules-list">
    {modules.map((module, index) => (
      <li key={index} className="module-item">
        <div>
          <strong>Name:</strong> {module.name}
        </div>
        <div>
          <strong>Year:</strong> {module.year}
        </div>
        <div>
          <strong>Code:</strong> {module.code}
        </div>
        <button onClick={() => handleDeleteModule(index)}>
           <FontAwesomeIcon icon={faTrash} />
        </button>
      </li>
    ))}
  </ul>
</div>

    </div>
  );
};

export default MainComponent;
