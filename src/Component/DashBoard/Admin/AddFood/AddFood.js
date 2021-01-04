import { Formik, Form, Field } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const initData = {
  name: '',
  subTitle: '',
  price: 0,
  description: '',
  category: '',
};

const FoodSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Food Name is Required.'),
  subTitle: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Subtitle is Required.'),
  price: Yup.number().min(1, 'Too Short').required('Price is Required'),
  description: Yup.string()
    .min(20, 'Too Short!')
    .max(300, 'Too Long!')
    .required('Description is Required.'),
  category: Yup.object().shape({
    label: Yup.string().required('Category is Required!'),
    value: Yup.string().required('Category is Required!'),
  }),
});

const AddFood = () => {
  return (
    <>
      <Formik
        initialValues={initData}
        validationSchema={FoodSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, errors, touched, isSubmitting, handleSubmit }) => (
          <Form>
            <Field
              type="text"
              name="name"
              value={values.name}
              error={errors.name}
              placeholder="Food Name"
            />
            <Field
              type="text"
              name="subTitle"
              value={values.subTitle}
              error={errors.subTitle}
              placeholder="Sub Title"
            />
            <Field
              type="number"
              name="price"
              value={values.price}
              error={errors.price}
              placeholder="Food Price"
              min="1"
            />
            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddFood;
