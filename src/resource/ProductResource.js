import BaseResource from './BaseResource';

export default class ProductResource extends BaseResource {
  constructor() {
    super({ url: '/api/products' });
  }

  list() {
    return super.get();
  }

  create(data) {
    return super
      .post(data)
      .then((response) => response)
      .catch((error) => error.response);
  }

  update(id, data) {
    return super
      .put(data, { url: `${this.url}/${id}` })
      .then((response) => response)
      .catch((error) => error.response);
  }

  delete(id) {
    return super
      .delete({ url: `${this.url}/${id}` })
      .then((response) => response)
      .catch((error) => error.response);
  }
}
