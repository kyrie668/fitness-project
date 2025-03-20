import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useNavigate } from 'react-router';

/**
 * @description 请求基础配置
 */
const axiosInstance: AxiosInstance = axios.create({
  baseURL: '/api', // API 基础 URL
  timeout: 5000, // 超时时间 5s
  withCredentials: true, // 允许跨域携带凭证
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
  responseType: 'json', // 设置响应数据类型为 JSON
});

/**
 * @description 请求拦截器
 */
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 可以在此处添加 token
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * @description 响应拦截器
 */
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('response', response);
    return Promise.resolve(response);
  },
  (error) => {
    console.error('请求出错：', error);
    // 如果状态码为 401，表示未认证，处理相关逻辑
    if (error.response && error.response.status === 401) {
      console.error('未授权，正在跳转到登录页面...');
      // 清除认证信息（假设认证信息存储在 localStorage 中）
      localStorage.removeItem('token'); // 移除 token
      sessionStorage.removeItem('token'); // 如果使用 sessionStorage 存储 token，可以清除它
      // const navigate = useNavigate();
      // navigate('/#/login'); // 使用 navigate 跳转至登录页面
      // 重定向到登录页面
      window.location.href = '/#/login'; // 使用 window.location.href 跳转至登录页面
    }
    return Promise.resolve(error.response);
  }
);

/**
 * @description 封装 GET 请求
 */
export function get<T>(url: string, params?: object): Promise<T> {
  return axiosInstance.get<T>(url, { params }).then((response) => response.data); // ✅ 提取出 AxiosResponse 中的数据部分
}

/**
 * @description 封装 POST 请求
 */
export function post<T>(url: string, data?: object, option: any = {}, config?: object): Promise<T> {
  return axiosInstance.post<T>(url, data, config).then((response) => response.data); // ✅ 提取出 AxiosResponse 中的数据部分
}

// 配置上传的formData格式
const formDataConfig = {
  headers: { 'Content-Type': 'multipart/form-data' },
};

/**
 * @description 封装上传文件请求
 */
export function uploadFile<T>(url: string, data: FormData): Promise<T> {
  return axiosInstance.post<T>(url, data, formDataConfig).then((response) => response.data); // ✅ 提取出 AxiosResponse 中的数据部分
}

export default axiosInstance;
