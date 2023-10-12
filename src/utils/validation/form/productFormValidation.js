/*-------------------------------------------------------------------
|  🐼 Input Validators 
|
|  🐯 Purpose: THIS FILE CONTAINS ALL THE VALIDATORS OBJECTS
|
|  🐸 Returns:  -
*-------------------------------------------------------------------*/

export const productNameValidation = {
  name: 'name',
  label: 'Product Name',
  type: 'text',
  id: 'name',
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
  name: 'description',
  label: 'Sub Description',
  type: 'text',
  id: 'description',
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
  name: 'code',
  label: 'Product Code',
  type: 'text',
  id: 'code',
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
  name: 'sku',
  label: 'Product SKU',
  type: 'text',
  id: 'sku',
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
  },
};

export const categoryValidation = {
  name: 'category',
  label: 'Category',
  id: 'category',
  placeholder: 'Select category',
  validation: {
    required: {
      value: true,
      message: 'Category is required',
    },
  },
};

export const tagsValidation = {
  name: 'tags',
  label: 'Tags',
  id: 'tags',
  placeholder: 'Select tag',
  validation: {
    required: {
      value: true,
      message: 'Tags is required',
    },
  },
};

export const regularPriceValidation = {
  name: 'regularPrice',
  label: 'Regular Price',
  type: 'number',
  id: 'regularPrice',
  placeholder: 'Enter Regular Price',
  validation: {
    required: {
      value: true,
      message: 'Regular Price is required',
    },
  },
};

export const salePriceValidation = {
  name: 'salePrice',
  label: 'Sale Price',
  type: 'number',
  id: 'salePrice',
  placeholder: 'Sale Price',
  validation: {
    required: {
      value: true,
      message: 'Sale Price is required',
    },
  },
};
