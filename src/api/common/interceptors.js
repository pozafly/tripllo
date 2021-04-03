// axios의 interceptor 설정
import store from '@/store';
import router from '@/routes';

export const setInterceptors = instance => {
  // request
  instance.interceptors.request.use(
    config => {
      config.headers.Authorization = store.state.token;
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  // response
  instance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (
        error.response.data.status === 403 ||
        error.response.data.status === 'UNAUTHORIZED'
      ) {
        alert('권한이 없습니다.');
        // if (router.history.current.fullPath.includes('card')) return;
        // router.push('/main');
      }
      return Promise.reject(error);
    },
  );

  return instance;
};
