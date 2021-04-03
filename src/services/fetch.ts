import qs from 'qs';
import { BASE_URL } from '../config/index';

/**
 * 检查http状态值
 * @param response
 * @returns {*}
 */
// eslint-disable-next-line no-undef
function checkHttpStatus(response: any, resolve: any, reject: any) {
  if (response.status >= 200 && response.status < 300) {
    resolve(response.json());
  } else {
    response.data.errorCode = response.statusCode;
    response.data.error = `ERROR CODE: ${response.statusCode}`;
    reject(response.data);
  }
}

export default {
  request(url: string, params: any, method?: string) {
    return new Promise((resolve, reject) => {
      fetch(`${BASE_URL}${url}`, {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          accept: 'application/json,text/plain,*/*',
        },
        method: method || 'GET',
        body: qs.stringify(params),
      })
        .then((res) => {
          checkHttpStatus(res, resolve, reject);
        })
        .catch((err) => {
          throw err;
        });
    });
  },
  get(url: string, params?: any) {
    return this.request(url, params || {});
  },
  post(url: string, params?: any) {
    return this.request(url, params || {}, 'POST');
  },
  put(url: string, params?: any) {
    return this.request(url, params || {}, 'PUT');
  },
  delete(url: string, params?: any) {
    return this.request(url, params || {}, 'DELETE');
  },
};
