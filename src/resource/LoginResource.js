import axios from 'axios';

export default class LoginResource {
  login(data) {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    return axios({
      method: 'post',
      url: `${baseUrl}/api/auth/login`,
      data: data,
    })
      .then((response) => response)
      .catch((error) => error.response);
  }
}
