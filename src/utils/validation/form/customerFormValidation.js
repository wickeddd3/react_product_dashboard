/*-------------------------------------------------------------------
|  🐼 Input Validators 
|
|  🐯 Purpose: THIS FILE CONTAINS ALL THE VALIDATORS OBJECTS
|
|  🐸 Returns:  -
*-------------------------------------------------------------------*/

export const nameValidation = {
  name: 'name',
  label: 'Customer Name',
  type: 'text',
  id: 'name',
  placeholder: 'Enter customer name',
  validation: {
    required: {
      value: true,
      message: 'Customer name is required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
};

export const emailValidation = {
  name: 'email',
  label: 'Email Address',
  type: 'email',
  id: 'email',
  placeholder: 'Enter email address',
  validation: {
    required: {
      value: true,
      message: 'Email address is required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Email address is not valid',
    },
  },
};

export const contactValidation = {
  name: 'contact',
  label: 'Contact',
  type: 'text',
  id: 'contact',
  placeholder: 'Enter contact number',
  validation: {
    required: {
      value: true,
      message: 'Contact number is required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
};
