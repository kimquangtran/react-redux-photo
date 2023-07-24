import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select'
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import { ErrorMessage } from 'formik';

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
    form,
    options,

    type, label, placeholder, disabled
  } = props;

  const { name, value, onChange, onBlur } = field;

  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

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

        className={showError ? 'is-invalid' : ''}
      />

      <ErrorMessage name={name} component={FormFeedback} />

    </FormGroup>
  );
}

export default SelectField;