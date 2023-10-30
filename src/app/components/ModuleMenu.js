import React from 'react';
import { useEffect,useState } from 'react';
import CustomTable from './moduleTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Piechart from './piechart';
const api = require('../utils/api')
const CustomMenu = ({ module, onClose , updateModuleMark}) => {
  const [data, setData] = useState([]);


  const fetchAssignments = async () => {
    try {
      const response = await api.getModuleInfo(module.id)
      const dataArray = []
      let other = 100
      for (let i = 0;i<response.results.length;i++){
        dataArray.push({
          name:response.results[i][0],
          y:response.results[i][1]
        })
        other = other - response.results[i][1]
      }
      dataArray.push({
        name:'not selected Yet',
        y:other
      })
      console.log(dataArray)
      setData(dataArray)
      
      
      
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
  
    fetchAssignments();
  }, []);

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
        <Piechart data={data}></Piechart>
        </div>
        
      )}
      <CustomTable module={module} updateModuleMark={updateModuleMark} fetchModuleInfo={fetchAssignments}></CustomTable>
      <button onClick={onClose}><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></button>
    </div>
  );
};

export default CustomMenu;
