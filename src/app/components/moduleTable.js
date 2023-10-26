import React, { useState } from 'react';
import CustomDropdown from './DropDownMenu';
const CustomTable = ({ module }) => {
  const [data, setData] = useState([]);
  const [newRow, setNewRow] = useState({
    assessmentName: '',
    assessmentDate: '',
    mark: '',
    completed: false,
    weight: '',
    assessmentType: '',
  });
  const [assessmentName, setAssesmentName] = useState('')
  const [assessmentDate, setAssesmentDate] = useState('')
  const [mark, setMark] = useState('')
  const [completed, setCompleted] = useState('')
  const [weight,setWeight] = useState('')
  const [assessmentType,setAssesmentType] = useState('')
  const options = [
    {value:'1',label:'Assignment'},
    {value:'2',label:'Test'}
]
const [optionSelected, setOptionSelected] = useState(null);

  const addRow = () => {
    console.log('Creating new table row ',assessmentName,assessmentDate,mark,completed,weight,'\t',optionSelected[0].value)
    const newRow = {
        assessmentName: assessmentName,
        assessmentDate: assessmentDate,
        mark: mark,
        weight: weight,
        assessmentType: optionSelected[0].value, 
    }
    setData([...data, newRow]);
    setAssesmentDate('')
    setAssesmentName('')
    setMark('')
    setCompleted('')
    setWeight('')
    setOptionSelected('')
  };

  const deleteRow = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  return (
    <div className="custom-table">
      <h3>Custom Table</h3>
      <table>
        <thead>
          <tr>
            <th>Assessment Name</th>
            <th>Assessment Date</th>
            <th>Mark</th>
            <th>Weight</th>
            <th>Assessment Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.assessmentName}</td>
              <td>{row.assessmentDate}</td>
              <td>{row.mark}</td>
              <td>{row.weight}</td>
              <td>{row.assessmentType}</td>
              <td>
                <input
                  type="checkbox"
                  checked={row.completed}
                  readOnly
                />
              </td>
              <td>
                <button onClick={() => deleteRow(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
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
        <CustomDropdown options={options} optionSelected={optionSelected} setOptionSelected={setOptionSelected} placeholder='Assesment type' value={newRow.assessmentType}></CustomDropdown>
        <button onClick={addRow}>Add Row</button>
      </div>
    </div>
  );
};

export default CustomTable;
