import axios from 'axios'
import axiosService from 'axios-service'

const setTicketToHeader = config => {
  const { headers } = config;
  if (window.localStorage.getItem('mail')) {
    headers.mail = 'wangyl@inke.cn'
    headers['Auth-Type'] = 'custom'
  }
};

const setTicketToParams = config => {
  const { params = {} } = config;
  config.params = {
    ...params,
  }
};

// const TIME_OUT = 5000
const TIME_OUT = 3e+4;

axiosService.init(axios, {
  requestDefaults: {
    // 目前还没实现, 预计在下个版本中处理
    autoLoading: true,
    // response.data下面的配置
    // server端请求msg(
    msgKey: 'msg',
    // server端数据的key
    dataKey: 'data',
    // server端请求状态的key
    codeKey: 'code',
    // server端请求成功的状态, 注意: 此为response.data下该接口请求成功状态码, 非浏览器中http请求返回的成功状态(200)
    successCode: 0,
  }
});

// 超时时间
axios.defaults.timeout = TIME_OUT;
// 打开withCredentials
axios.defaults.withCredentials = true;

// 请求拦截器
axios.interceptors.request.use(config => {
  if (config.autoLoading === undefined || config.autoLoading === true) {
    // loading.show();
  }

  // 把 ticket 放入 header 和 query 中，按需选用
  setTicketToHeader(config)
  setTicketToParams(config)
  return config
}, error => {
  // loading.hide();
  console.error('加载超时');
  return Promise.reject(error)
});

// 响应拦截器
axios.interceptors.response.use(data => {
  const { autoLoading } = data.config;
  if (autoLoading === undefined || autoLoading === true) {
    // loading.hide()
  }
  // todo 返回 ticket 过期则退出
  /**
   * 处理status为0的情况
   */
  if (Object.prototype.hasOwnProperty.call(data.data, 'status') || Object.prototype.hasOwnProperty.call(data.data, 'msg')) {
    data.data.error_msg = data.data.msg
    data.data.dm_error = data.data.status
    delete data.data.status
    delete data.data.msg
  }
  // else if (Object.prototype.hasOwnProperty.call(data.data, 'dm_error')) {
  //   data.data.dm_error = 0
  // }
  return data
}, error => {
  // loading.hide();
  console.error('加载失败');
  return Promise.reject(error)
});
