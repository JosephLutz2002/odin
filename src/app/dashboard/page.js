'use client'
import React, { useEffect, useState } from 'react';
import AddModuleForm from '../components/addModule';
import api from '../utils/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CustomMenu from '../components/ModuleMenu';
import Navbar from '../components/navbar';
import Piechart from '../components/piechart';
const MainComponent = () => {
  const [showForm, setShowForm] = useState(false);
  const [modules, setModules] = useState([]);
  const [modalForModelEdit, setModalForModelEdit] = useState(false)
  const [modalForAddingModule,setModalForAddingModule] = useState(false)
  const [newModule, setNewModule] = useState({
    name: '',
    id: '',
    year: '',
    code: '',
    mark: '',
  });
  const [showUseClient, setShowUseClient] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);
  const data = [
    { label: 'Content A', value: 30 },
    { label: 'Content B', value: 20 },
    { label: 'Content C', value: 50 },
  ];
  const updateModuleMark = (moduleId, newMark) => {
    const updatedModules = modules.map((module) => {
      if (module.id === moduleId) {
        return { ...module, mark: newMark };
      }
      return module;
    });

    setModules(updatedModules);
  };
  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await api.getAllModules();
        const ModuleArray = response.Modules.map(moduleData => ({
          name: moduleData[1],
          id: moduleData[0],
          year: moduleData[2],
          code: moduleData[3],
          mark: moduleData[4],
        }));
        setModules(ModuleArray);
      } catch (error) {
        // Handle error
      }
    };

    fetchModules();
  }, []);

  const openForm = () => {
    setShowForm(true);
    setModalForAddingModule(true)
  };

  const closeForm = () => {
    setShowForm(false);
    setModalForAddingModule(false);
  };

  const addModule = (module) => {
    setModules([...modules, module]);
    closeForm();
  };

  const handleDeleteModule = async (index) => {
    const deletedModuleId = modules[index].id;
    if (await api.deleteModule(deletedModuleId)) {
      console.log('Module Successfully deleted');
    }
    const updatedModules = [...modules];
    updatedModules.splice(index, 1);
    setModules(updatedModules);
    setShowUseClient(false)

    // Log the ID of the deleted module
    console.log(`Deleted module with ID: ${deletedModuleId}`);
  };

  const handleUseClientClick = (module) => {
    setSelectedModule(module);
    setModalForModelEdit(true)
    setShowUseClient(true);
  };


  const closeScreen = () =>{
    setModalForAddingModule(true)
  }
  return (
    <div>
      {!modalForModelEdit && (
      <div>
      <button onClick={openForm}><FontAwesomeIcon icon={faPlus} /></button>
      { showForm && (
        <AddModuleForm
          newModule={newModule}
          setNewModule={setNewModule}
          onClose={closeForm}
          onAddModule={addModule}
        />
      )}
      {!modalForAddingModule && (
      <div>
        <h2>Modules</h2>
        <ul className="modules-list">
          {modules.map((module, index) => (
            <li
              key={module.id}
              className="module-item"
              onClick={() => handleUseClientClick(module)}
            >
              <div>
                <strong>Name:</strong> {module.name}
              </div>
              <div>
                <strong>Year:</strong> {module.year}
              </div>
              <div>
                <strong>Code:</strong> {module.code}
              </div>
              <div>
                <strong>Mark :</strong> {module.mark}
              </div>
              <button onClick={() => handleDeleteModule(index)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          ))}
        </ul>
      </div>)}
      </div>
       )}
      {modalForModelEdit && showUseClient && (
        <CustomMenu
          module={selectedModule}
          updateModuleMark={updateModuleMark}
          onClose={() => {setShowUseClient(false); setModalForModelEdit(false)}}
        />
      )}
    </div>
  );
};

export default MainComponent;
