import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select'
import { FormGroup, Input, Label } from 'reactstrap';

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  placeholder: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  label: '',
  placeholder: '',
  disabled: false,
  options: []
}

function SelectField(props) {
  const {
    field,
    options,

    type, label, placeholder, disabled
  } = props;

  const { name, value, onChange, onBlur } = field;

  const selectedOption = options.find(option => option.value === value);

  const handleSelectOptionChange = (selectedOption) => {
    const selectedValue = selectedOption ? selectedOption.value : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue
      }
    }

    field.onChange(changeEvent);
  }

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Select
        id={name}
        {...field}
        value={selectedOption}
        onChange={handleSelectOptionChange}

        type={type}
        isDisabled={disabled}
        placeholder={placeholder}
        options={options}
      />

    </FormGroup>
  );
}

export default SelectField;