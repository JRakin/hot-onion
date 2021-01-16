import { Formik, Form, Field } from 'formik';
import React from 'react';
import Select from 'react-select';
import * as Yup from 'yup';
import './AddFood.scss';
// import 'antd/dist/antd.css';

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

const categoryOption = [
  {
    value: 'Breakfast',
    label: 'Breakfast',
  },
  {
    value: 'Lunch',
    label: 'Lunch',
  },
  {
    value: 'Dinner',
    label: 'Dinner',
  },
];

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
        {({
          values,
          errors,
          setFieldValue,
          touched,
          isSubmitting,
          handleSubmit,
        }) => (
          <div>
            <Form className="row d-flex p-3">
              <div className="col-md-3 p-2">
                <Field
                  style={{ fontSize: '16px' }}
                  className="w-100 custom-field"
                  type="text"
                  name="name"
                  value={values.name}
                  error={errors.name}
                  placeholder="Food Name"
                />
              </div>
              <div className="col-md-3 p-2">
                <Field
                  style={{ fontSize: '16px' }}
                  className="w-100 custom-field"
                  type="text"
                  name="subTitle"
                  value={values.subTitle}
                  error={errors.subTitle}
                  placeholder="Sub Title"
                />
              </div>
              <div className="col-md-3 p-2">
                <Field
                  style={{ fontSize: '16px' }}
                  className="w-100 custom-field"
                  type="number"
                  name="price"
                  value={values.price}
                  error={errors.price}
                  placeholder="Food Price"
                  min="1"
                />
              </div>
              <div className="col-md-3 p-2">
                <Field
                  style={{ fontSize: '12px' }}
                  className="w-100 custom-field"
                  type="file"
                  name="image"
                  value={values.image}
                  error={errors.image}
                  placeholder=""
                  // min="1"
                />
              </div>
              {/* <div className="col-md-3 p-2">
                <Field
                  style={{ padding: '2px 8px' }}
                  className="w-100"
                  type="number"
                  name="price"
                  value={values.price}
                  error={errors.price}
                  placeholder="Food Price"
                  min="1"
                />
              </div> */}
              <div className="col-md-3 p-2">
                {/* <Field
                  className="w-100"
                  component={() => ( */}
                <Select
                  className="w-100"
                  options={categoryOption}
                  onChange={(valueOption) => {
                    setFieldValue('category', valueOption.value);
                  }}
                  // styles={customStyles}
                  // width="300px"
                  // className="w-100"
                />
                {/* )}
                ></Field> */}
              </div>
              <div className="col-md-3 p-2">
                <Field
                  style={{ fontSize: '16px' }}
                  className="w-100 custom-field"
                  as="textarea"
                  type="text"
                  name="description"
                  value={values.description}
                  error={errors.description}
                  placeholder="Description"
                />
              </div>
              <div className="col-md-3 d-flex justify-content-center align-items-center p-2">
                <button className="btn btn-danger" type="submit">
                  Save
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default AddFood;
