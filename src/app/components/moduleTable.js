import React, { useState, useEffect } from 'react';
import CustomDropdown from './DropDownMenu';
const api = require('../utils/api')
const CustomTable = ({ module ,updateModuleMark}) => {
  const [data, setData] = useState([]);
  const [newRow, setNewRow] = useState({
    assessmentName: '',
    assessmentDate: '',
    mark: 0,
    weight: '',
    assessmentType: '',
    id:''
  });
  const [assessmentName, setAssesmentName] = useState('')
  const [assessmentDate, setAssesmentDate] = useState('')
  const [mark, setMark] = useState('')
  const [completed, setCompleted] = useState('')
  const [weight,setWeight] = useState('')
  const [assessmentType,setAssesmentType] = useState('')
  const [assessmentDesc, setAssesmentDesc] = useState('')
  const options = [
    {value:'1',label:'Assignment'},
    {value:'2',label:'Test'}
]
const [optionSelected, setOptionSelected] = useState(null);

useEffect(() => {
  const fetchAssignments = async () => {
    try {
      const response = await api.getAssignments(module.id);
      const assignArray = []
      for(let i = 0;i<response.assignments.length;i++){
        const newAssign = {
          id:response.assignments[i][0],
          assessmentName:response.assignments[i][1],
          assessmentDate:response.assignments[i][2],
          mark:response.assignments[i][3],
          weight:response.assignments[i][4],
          assessmentType:'Assignment',
          assessmentDescp:response.assignments[i][5]

        }
        assignArray.push(newAssign)
      }

      const tests = await api.getTests(module.id)
      for(let i = 0;i<tests.tests.length;i++){
        const newAssign = {
          id:tests.tests[i][0],
          assessmentName:tests.tests[i][1],
          assessmentDate:tests.tests[i][2],
          mark:tests.tests[i][3],
          weight:tests.tests[i][4],
          assessmentType:'Test',
          assessmentDescp:'Not Needed'

        }
        assignArray.push(newAssign)
      }
      setData(assignArray)
    } catch (error) {
    }
  };

  fetchAssignments();
}, []);
  const addRow = async () => {
    let row_id = ''
    if(optionSelected[0].value == 1){
      const response = await api.addAssignment(assessmentName,assessmentDesc,assessmentDate,module.id,weight)
      row_id = response.id

    }else {
      const reponse = await api.addTest(assessmentName,assessmentDate,module.id,weight)
      row_id = reponse.testId
    }
    console.log('mark for the assesment added',mark)
    const newRow = {
        assessmentName: assessmentName,
        assessmentDate: assessmentDate,
        mark: mark,
        weight: weight,
        assessmentType: optionSelected[0].value,
        id:row_id
    }
    fetchData()
    setAssesmentDate('')
    setAssesmentName('')
    setMark(0)
    setCompleted('')
    setWeight('')
    setOptionSelected('')
    setAssesmentDesc('')
  };

  const deleteRow = async (index) => {
    if (data[index].assessmentType === 'Assignment'){
      const response = await api.deleteAssignment(data[index].id,module.id)
      updateModuleMark(module.id,response.mark);

    }else {
      const response = await api.deleteTest(data[index].id,module.id)
      updateModuleMark(module.id,response.mark);
    }
    fetchData();
  };

  const handleSaveMark = async (index) =>{
    const editedMark = data[index];
    const t = await api.getMark(module.id);
    updateModuleMark(module.id,t.average);
    fetchData();
  }

  const [editIndex, setEditIndex] = useState(null);
  const [editedMark, setEditedMark] = useState(null);

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditedMark(data[index].mark);
  };

  const handleSaveClick = async (index) => {
    if (data[index].assessmentType === 'Assignment'){
      const response =  await api.updateAssignment(data[index].assessmentName,data[index].id,module.id,editedMark)
      updateModuleMark(module.id,response.mark)

    }else {
      const response =  await api.updateTest(data[index].assessmentName,data[index].id,module.id,editedMark)
      updateModuleMark(module.id,response.mark)
    }
    fetchData()
    setEditIndex(null);
  };

  const fetchData = async () => {
    try {
      const response = await api.getAssignments(module.id);
      const assignArray = []
      for(let i = 0;i<response.assignments.length;i++){
        const newAssign = {
          id:response.assignments[i][0],
          assessmentName:response.assignments[i][1],
          assessmentDate:response.assignments[i][2],
          mark:response.assignments[i][3],
          weight:response.assignments[i][4],
          assessmentType:'Assignment',
          assessmentDescp:response.assignments[i][5]

        }
        assignArray.push(newAssign)
      }

      const tests = await api.getTests(module.id)
      for(let i = 0;i<tests.tests.length;i++){
        const newAssign = {
          id:tests.tests[i][0],
          assessmentName:tests.tests[i][1],
          assessmentDate:tests.tests[i][2],
          mark:tests.tests[i][3],
          weight:tests.tests[i][4],
          assessmentType:'Test',
          assessmentDescp:'Not Needed'

        }
        assignArray.push(newAssign)
      }
      setData(assignArray)
    } catch (error) {
    }
  };

  return (
    <div className="custom-table">
      <h3>Assignments and Tests for {module.name}</h3>
      <table>
        <thead>
          <tr>
            <th>Assessment Name</th>
            <th>Assessment Date</th>
            <th>Mark</th>
            <th>Weight</th>
            <th>Assessment Type</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.assessmentName }</td>
              <td>{row.assessmentDate}</td>
              <td>
                {editIndex === index ? (
                  <div>
                    <input
                      type="number"
                      value={editedMark}
                      onChange={(e) => setEditedMark(e.target.value)}
                    />
                    <button onClick={() => handleSaveClick(index)}>Save</button>
                    %
                  </div>
                ) : (
                  <div onClick={() => handleEditClick(index)} style={{ cursor: 'pointer' }}>
                    {row.mark}%
                  </div>
                )}
              </td>
              <td>{row.weight}%</td>
              <td>{row.assessmentType}</td>
              <td>{row.assessmentDescp}</td>
              <td>
                <button onClick={() => deleteRow(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          value={assessmentName}
          placeholder="Assessment Name"
          onChange={(e) =>
            setAssesmentName(e.target.value)
          }
        />
        <input
          type="text"
          value={assessmentDate}
          placeholder="Assessment Date"
          onChange={(e) =>
            setAssesmentDate(e.target.value)
          }
        />
        <input
          type="text"
          value={mark}
          placeholder="Mark"
          onChange={(e) => setMark(e.target.value)}
        />
        <input
          type="text"
          value={weight}
          placeholder="Weight"
          onChange={(e) => setWeight(e.target.value)}
        />
        <CustomDropdown options={options} optionSelected={optionSelected} setOptionSelected={setOptionSelected} placeholder='Assessment Type' value={newRow.assessmentType}></CustomDropdown>
        <input type='text' value={assessmentDesc} placeholder='Description' onChange={(e) => setAssesmentDesc(e.target.value)} />
        <button onClick={addRow}>Add Row</button>
      </div>
    </div>
  );
};

export default CustomTable
