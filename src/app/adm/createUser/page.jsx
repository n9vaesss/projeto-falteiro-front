'use client';

import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import * as yup from 'yup';

export default function CreateUser() {
  const handleSubmit = (values) => {
    const createNewUser = async () => {
      try {
        const newUser = {
          name: values.name,
          email: values.email,
          password: values.password,
        };
        const response = await axios.post(
          'http://localhost:8080/api/users',
          newUser,
        );
        console.log(response);
        toast.success('Usuario criado com sucesso');
      } catch (error) {
        toast.error(error.response.data.message);
        console.error('Erro ao criar novo usuário:', error);
      }
    };

    createNewUser();
  };

  const handleValidation = yup.object().shape({
    name: yup
      .string()
      .required('fill in all fields')
      .max(70, 'maximum characters exceeded (70)'),
    email: yup
      .string()
      .required('fill in all fields')
      .max(70, 'maximum characters exceeded (70)'),
    password: yup
      .string()
      .required('fill in all fields')
      .min(8, 'minimum characters (8)')
      .max(70, 'maximum characters exceeded (70)'),
  });

  return (
    <div className="flex flex-col w-screen h-screen items-center bg-gray-50">
      <div className="container max-w-md mt-10">
        <h1>Created</h1>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={handleValidation}
        >
          <Form className="w-full flex flex-col space-y-4 relative">
            <Field
              type="text"
              name="name"
              label="Name"
              variant="standard"
              as={TextField}
            />
            <span className="absolute top-8 left-0 text-sm font-bold text-red-600">
              <ErrorMessage name="name" />
            </span>
            <Field
              type="email"
              name="email"
              label="Email"
              variant="standard"
              as={TextField}
            />
            <span className="absolute top-24 left-0 text-sm font-bold text-red-600">
              <ErrorMessage name="email" />
            </span>
            <Field
              type="password"
              name="password"
              label="Password"
              variant="standard"
              as={TextField}
            />
            <span className="absolute top-40 left-0 text-sm font-bold text-red-600">
              <ErrorMessage name="password" />
            </span>
            <Button variant="outlined" type="submit" className="w-1/2 m-auto">
              Outlined
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
