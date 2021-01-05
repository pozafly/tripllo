import GoogleLogin from 'vue-google-login';
import $Google from '@/utils/social/Google';
import $Kakao from '@/utils/social/Kakao';
import $Github from '@/utils/social/Github';
import KProgress from 'k-progress';

const install = Vue => {
  Vue.prototype.$Kakao = $Kakao;
  Vue.prototype.$Github = $Github;
  Vue.prototype.$Google = $Google;
  Vue.component('GoogleLogin', GoogleLogin);
  Vue.component('KProgress', KProgress);
};

export { install };
