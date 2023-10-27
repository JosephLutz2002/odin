import React from 'react';
import { default as ReactSelect } from 'react-select';
import { components } from 'react-select';

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input type="checkbox" checked={props.isSelected} onChange={() => null} />{' '}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

function CustomDropdown({ options, optionSelected, setOptionSelected }) {
  const handleChange = (selected) => {
    setOptionSelected(selected);
  };

  return (
    <ReactSelect
      isMulti
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      components={{
        Option,
      }}
      onChange={handleChange}
      allowSelectAll={true}
      options={options}
      value={optionSelected}
    />
  );
}

export default CustomDropdown;
