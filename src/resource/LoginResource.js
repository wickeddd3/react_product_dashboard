import axios from 'axios';

export default class LoginResource {
  async login(data) {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    return axios({
      method: 'post',
      url: `${baseUrl}/api/login`,
      data,
    })
      .then((response) => response)
      .catch((error) => error.response);
  }
}
