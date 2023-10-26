import React, { useState } from 'react';

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

  const addRow = () => {
    setData([...data, newRow]);
    setNewRow({
      assessmentName: '',
      assessmentDate: '',
      mark: '',
      completed: false,
      weight: '',
      assessmentType: '',
    });
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
            <th>Completed</th>
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
          placeholder="Assessment Name"
          value={newRow.assessmentName}
          onChange={(e) =>
            setNewRow({ ...newRow, assessmentName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Assessment Date"
          value={newRow.assessmentDate}
          onChange={(e) =>
            setNewRow({ ...newRow, assessmentDate: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Mark"
          value={newRow.mark}
          onChange={(e) => setNewRow({ ...newRow, mark: e.target.value })}
        />
        <input
          type="text"
          placeholder="Weight"
          value={newRow.weight}
          onChange={(e) => setNewRow({ ...newRow, weight: e.target.value })}
        />
        <input
          type="text"
          placeholder="Assessment Type"
          value={newRow.assessmentType}
          onChange={(e) =>
            setNewRow({ ...newRow, assessmentType: e.target.value })
          }
        />
        <label>
          Completed
          <input
            type="checkbox"
            checked={newRow.completed}
            onChange={(e) =>
              setNewRow({ ...newRow, completed: e.target.checked })
            }
          />
        </label>
        <button onClick={addRow}>Add Row</button>
      </div>
    </div>
  );
};

export default CustomTable;
