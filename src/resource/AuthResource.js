import BaseResource from './BaseResource';

export default class AuthResource extends BaseResource {
  constructor() {
    super({ url: '/api/users' });
  }

  async get() {
    return super.get({ url: `${this.url}/current` });
  }
}
