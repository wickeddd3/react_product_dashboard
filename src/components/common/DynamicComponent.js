import { createElement } from 'react';

const DynamicComponent = ({ is }) => {
  return createElement(is);
};

export default DynamicComponent;
