import BaseResource from './BaseResource';

export default class AuthResource extends BaseResource {
  constructor() {
    super({ url: '/api/auth' });
  }

  get() {
    return super.get({ url: `${this.url}/current` });
  }
}
