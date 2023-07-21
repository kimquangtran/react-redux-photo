import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
// import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
// import Images from '../../../../constants/images';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import Select from 'react-select';
import { Input, Button, FormGroup, Label } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import Images from 'constants/images';
import { Formik, Form, FastField } from 'formik';

PhotoForm.propTypes = {
  onSubmit: PropTypes.func
};

PhotoForm.defaultProps = {
  onSubmit: null
}

function PhotoForm(props) {
  const initialValues = {
    title: '',
    categoryId: null
  }
  return (
    <>
      <h3>Photo Form</h3>

      <Formik
        initialValues={initialValues}
        onSubmit={values => console.log('Submit: ', values)}
      >
        {
          formikPorps => {
            // do something here
            const { values, errors, touched } = formikPorps;
            console.log({ values, errors, touched });

            return (
              <Form>

                <FastField
                  name="title"
                  component={InputField}

                  label="Title"
                  placeholder="Eg: Wow nature ..."
                />

                <FastField
                  name="categoryId"
                  component={SelectField}

                  label="Category"
                  placeholder="What's your photo category?"
                  options={PHOTO_CATEGORY_OPTIONS}
                />

                <FastField
                  name="photo"
                  component={RandomPhotoField}
                  label="Photo"
                />

                <FormGroup>
                  <Button type="submit" color="primary">Add to album</Button>
                </FormGroup>
              </Form>
            );
          }
        }
      </Formik>
    </>
  );
}

export default PhotoForm;