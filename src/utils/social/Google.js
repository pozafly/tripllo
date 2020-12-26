import { socialLogin, socialSignup } from '@/utils/social/index';

const Google = {
  login(googleUser) {
    const req = {
      accessToken: googleUser.xc.access_token,
      name: googleUser.xt.Ad,
      id: googleUser.xt.du,
      email: googleUser.xt.du,
      profileImg: googleUser.xt.iK,
      source: 'Google',
    };
    socialLogin(req);
  },

  signup(googleUser) {
    const req = {
      accessToken: googleUser.xc.access_token,
      name: googleUser.xt.Ad,
      id: googleUser.xt.du,
      email: googleUser.xt.du,
      profileImg: googleUser.xt.iK,
      source: 'Google',
    };
    socialSignup(req);
  },
};

export default Google;