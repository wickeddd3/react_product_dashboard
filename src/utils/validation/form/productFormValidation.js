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
  name: 'salePriceValidation',
  label: 'Sale Price',
  type: 'number',
  id: 'salePriceValidation',
  placeholder: 'Sale Price',
  validation: {
    required: {
      value: true,
      message: 'Sale Price is required',
    },
  },
};
