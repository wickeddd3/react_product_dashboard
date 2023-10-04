import BaseResource from './BaseResource';

export default class CustomerResource extends BaseResource {
  constructor() {
    super({ url: '/api/users' });
  }

  async list() {
    return super.get();
  }

  async create(data) {
    return super
      .post(data)
      .then((response) => response)
      .catch((error) => error.response);
  }

  async update(id, data) {
    return super
      .put(data, { url: `${this.url}/${id}` })
      .then((response) => response)
      .catch((error) => error.response);
  }

  async delete(id) {
    return super
      .delete({ url: `${this.url}/${id}` })
      .then((response) => response)
      .catch((error) => error.response);
  }
}
