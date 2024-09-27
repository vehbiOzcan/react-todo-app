import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import validationSchema from './validations';
import { useTodos } from '../../../context/TodoContext';

function NewTodoForm() {
  
  const {addTodo} = useTodos();

  return (
    <Formik
      initialValues={{ text: '' }}

      onSubmit={(values, bag) => {
       
          console.log(values);
          addTodo(values.text);
          bag.resetForm();
        
       
      }}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="text" className="new-todo" placeholder='What needs to be?' id="text" />
        </Form>
      )}
    </Formik >
  )
}

export default NewTodoForm