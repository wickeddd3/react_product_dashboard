import axios from 'axios';

export default class BaseResource {
  constructor({ url = '', config = {} }) {
    // eslint-disable-next-line no-undef
    const baseURL = process.env.REACT_APP_BASE_URL;
    const token = localStorage.getItem('react_product_dashboard.accessToken');
    const headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${token ?? ''}`,
    };
    this.http = axios.create({
      ...config,
      baseURL,
      headers,
    });
    this.http.interceptors.response.use(
      (response) => response,
      async ({ response }) => {
        const error = response;
        if (error.status === 401) {
          window.localStorage.removeItem('react_product_dashboard.accessToken');
          window.location = '/login';
        }
        return error;
      }
    );
    this.url = url;
    this.initialConfig = config;
  }

  httpRequest(config = {}) {
    return this.http({
      url: this.url,
      ...this.initialConfig,
      ...config,
    });
  }

  get(config = {}) {
    return this.httpRequest({ method: 'get', ...config });
  }

  post(data, config = {}) {
    return this.httpRequest({ method: 'post', data, ...config });
  }

  put(data, config = {}) {
    return this.httpRequest({ method: 'put', data, ...config });
  }

  patch(data, config = {}) {
    return this.httpRequest({ method: 'patch', data, ...config });
  }

  delete(config = {}) {
    return this.httpRequest({ method: 'delete', ...config });
  }
}
