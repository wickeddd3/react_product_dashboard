/*-------------------------------------------------------------------
|  🐼 Input Validators 
|
|  🐯 Purpose: THIS FILE CONTAINS ALL THE VALIDATORS OBJECTS
|
|  🐸 Returns:  -
*-------------------------------------------------------------------*/

export const productNameValidation = {
  name: 'productName',
  label: 'Product Name',
  type: 'text',
  id: 'productName',
  placeholder: 'Enter product name',
  validation: {
    required: {
      value: true,
      message: 'Product name is required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
};

export const subDescriptionValidation = {
  name: 'subDescription',
  label: 'Sub Description',
  type: 'text',
  id: 'subDescription',
  placeholder: 'Enter sub description',
  validation: {
    required: {
      value: true,
      message: 'Sub description is required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
};

export const productCodeValidation = {
  name: 'productCode',
  label: 'Product Code',
  type: 'text',
  id: 'productCode',
  placeholder: 'Enter product code',
  validation: {
    required: {
      value: true,
      message: 'Product code is required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
};

export const productSkuValidation = {
  name: 'productSku',
  label: 'Product SKU',
  type: 'text',
  id: 'productSku',
  placeholder: 'Enter product sku',
  validation: {
    required: {
      value: true,
      message: 'Product sku is required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
};

export const quantityValidation = {
  name: 'quantity',
  label: 'Quantity',
  type: 'number',
  id: 'quantity',
  placeholder: 'Enter quantity',
  validation: {
    required: {
      value: true,
      message: 'Quantity is required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
};

export const categoryValidation = {
  name: 'category',
  label: 'Category',
  id: 'category',
  placeholder: 'Enter category',
  validation: {
    required: {
      value: true,
      message: 'Category is required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
};
