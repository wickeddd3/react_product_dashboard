import { createElement } from 'react';

export default function DynamicComponent({ is, ...rest }) {
  return createElement(is, { ...rest });
}
