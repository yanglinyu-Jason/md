import axios from 'axios';
import qs from 'qs';

// const BASE_URL = '';

function handleUrl(baseUrl, url) { // 处理url前缀可能不一致
  let _url = url.replace(baseUrl, '');
  if (_url.indexOf('/') !== 0) {
    _url = `/${_url}`;
  }
  return _url;
}

const pending = []; // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
const { CancelToken } = axios;
const removePending = (config) => {
  for (const i in pending) {
    if (Object.prototype.hasOwnProperty.call(pending, i)) {
      let requestUrl = '';
      if (config.params && config.params.urlbreak === 1) {
        requestUrl = handleUrl(config.baseURL, config.url);
      } else {
        const params = `&params=${config.params ? JSON.stringify(config.params) : ''}`;
        const data = `&data=${config.data ? JSON.stringify(config.data) : ''}`;
        requestUrl = `${handleUrl(config.baseURL, config.url)}&${config.method}${params}${data}`;
      }
      if (pending[i].u === requestUrl) {
        // 当当前请求在数组中存在时执行函数体
        pending[i].cancelFun(); // 执行取消操作
        pending.splice(i, 1); // 把这条记录从数组中移除
        break;
      }
    }
  }
};
axios.defaults.withCredentials = true;
// 添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    removePending(config); // 在一个ajax发送前执行一下取消操作
    config.cancelToken = new CancelToken((cancel) => {
      let requestUrl = '';
      // 当请求参数中 urlbreak === 1时只对比url,不对比参数
      if (config.params && config.params.urlbreak === 1) {
        requestUrl = handleUrl(config.baseURL, config.url);
        delete config.params.urlbreak;
      } else {
        // 这里的ajax标识我是用请求地址&请求方式&请求参数拼接的字符串
        const params = `&params=${config.params ? JSON.stringify(config.params) : ''}`;
        const data = `&data=${config.data ? JSON.stringify(config.data) : ''}`;
        requestUrl = `${handleUrl(config.baseURL, config.url)}&${config.method}${params}${data}`;
      }
      pending.push({ u: requestUrl, cancelFun: cancel });
    });
    return config;
  },
  error => Promise.reject(error),
);

// 添加响应拦截器
axios.interceptors.response.use(
  (response) => {
    removePending(response.config); // 在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
    return response;
  },
  (error) => {
    if (error.response) {
      return {
        data: {}, // 返回一个空对象，防止wrapResponse报错
      };
    }
    return {
      data: { msg: 'cancel' },
    };
  },
);

const defaultOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer(params) {
    return qs.stringify(params, {
      arrayFormat: 'indices',
    });
  },
  timeout: 1000 * 60,
};

function request(options = {}) {
  // return new Promise((resolve, reject) => {
  const headers = {
    ...defaultOptions.headers,
    ...options.headers,
  };
  // const CancelToken = axios.CancelToken;
  // const source = CancelToken.source();
  const opt = {
    ...defaultOptions,
    ...options,
    baseURL: window.BASE_URL || '',
    headers,
    method: options.method || 'get',
    // cancelToken: source.token,
  };

  const p = axios(opt);
  // 可通过调用p.source.cancel()取消请求
  // p.source = source;
  return p;
}

export function postJSON(url, data, options) {
  const opt = {
    ...options,
    url,
    data,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return request(opt);
}

export function formUpload(url, data, options) {
  const opt = {
    ...options,
    method: 'post',
    url,
    data,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  return request(opt);
}

export function postForm(url, data, options) {
  const opt = {
    ...options,
    method: 'post',
    url,
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    transformRequest: [
      (res) => {
        const ret = qs.stringify(res, {
          arrayFormat: 'indices',
        });
        return ret;
      },
    ],
  };
  return request(opt);
}

export function getJSON(url, params, options) {
  const opt = {
    ...options,
    url,
    params,
    method: 'get',
  };
  return request(opt);
}

export function upload(url, data, options) {
  const opt = {
    ...options,
    method: 'post',
    url,
    data,
  };
  return request(opt);
}

export function del(url, params, options) {
  const opt = {
    ...options,
    url,
    params,
    method: 'delete',
  };

  return request(opt);
}

export function put(url, params, options) {
  const opt = {
    ...options,
    url,
    params,
    method: 'put',
  };

  return request(opt);
}
/**
 * @description 对response进行处理
 * @return {Promise} 经过处理后的Promise
 */
export function wrapResponse(p) {
  return p.then((response) => {
    if (typeof response.data !== 'object') {
      throw new Error('返回格式错误');
    }
    if (response.data.status === 200 || response.data.status === 4000 || response.data.success) {
      // 4000代表无数据
      if (response.data.result === 0) {
        return response.data.result;
      }
      return response.data.result || response.data;
    }
    throw new Error(
      response.data.msg || response.data.errorMsg || response.data.message || response.data.errMsg || '服务器处理错误',
    );
  }).catch((e) => {
    console.log(e);

    if (e.response) {
      throw new Error('服务器处理错误');
    } else if (e.request) {
      // 超时
      if (e.code === 'ECONNABORTED') {
        throw new Error('请求超时错误');
      }
      throw new Error('请求处理错误');
    } else {
      throw e;
    }
  });
}


/**
 * @description 对response进行处理
 * @return {Promise} 经过处理后的Promise
 */
export function wrapResponseLogin(p) {
  return p.then((response) => {
    if (typeof response.data !== 'object') {
      throw new Error('返回格式错误');
    }
    return response.data;
  }).catch((e) => {
    console.log(e);

    if (e.response) {
      throw new Error('服务器处理错误');
    } else if (e.request) {
      // 超时
      if (e.code === 'ECONNABORTED') {
        throw new Error('请求超时错误');
      }
      throw new Error('请求处理错误');
    } else {
      throw e;
    }
  });
}
