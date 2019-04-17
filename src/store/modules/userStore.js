import axios from 'axios';

const state = {
  token: null,
  userId: null,
  isLoggedIn: false,
};
const getters = {
  // eslint-disable-next-line no-shadow
  getToken: state => state.token,
  // eslint-disable-next-line no-shadow
  getlogInStatus: state => state.isLoggedIn,
  // eslint-disable-next-line no-shadow
  getUserId: state => state.userId,
};
const actions = {
  validateToken: async ({ commit }) => {
    try {
      if (localStorage.getItem('Live2TOKEN')) {
        axios.defaults.headers.common.Authorization = localStorage.getItem('Live2TOKEN');
        const result = await axios.post('validate');
        const token = localStorage.getItem('Live2TOKEN');
        axios.defaults.headers.common.Authorization = token;
        commit('setLoginState', token);
        commit('setLoggedIn', result.data.validToken);
        commit('setUserId', result.data.userid);
      } else {
        localStorage.removeItem('Live2TOKEN');
        delete axios.defaults.headers.common.Authorization;
      }
    } catch (error) {
      localStorage.removeItem('Live2TOKEN');
      delete axios.defaults.headers.common.Authorization;
    }
  },
  registerUser: async (context, loginData) => {
    try {
      const result = await axios.post('/register', {
        name: loginData.name,
        email: loginData.email,
        password: loginData.password,
        company: loginData.company,
        address: loginData.address,
      });
      return result;
    } catch (error) {
      return error.response.data;
    }
  },
  loginUser: async ({
    commit,
  }, loginData) => {
    try {
      const response = await axios.post('/login', {
        email: loginData.email,
        password: loginData.password,
      });
      const {
        token,
        userid,
      } = response.data;
      commit('setLoginState', token);
      commit('setLoggedIn', true);
      commit('setUserId', userid);
      localStorage.setItem('Live2TOKEN', token);
      axios.defaults.headers.common.Authorization = token;
      return true;
    } catch (error) {
      return error.response.data;
    }
  },
  getUserInfo: async () => {
    try {
      const result = await axios.get('/user');
      return {
        userInfo: true,
        userData: result.data,
      };
    } catch (error) {
      return error.resposne;
    }
  },
};
const mutations = {
  // eslint-disable-next-line no-shadow
  setLoginState: (state, token) => {
    // eslint-disable-next-line no-param-reassign
    state.token = token;
  },
  // eslint-disable-next-line no-shadow
  setLoggedIn: (state, status) => {
    // eslint-disable-next-line no-param-reassign
    state.isLoggedIn = status;
  },
  // eslint-disable-next-line no-shadow
  setUserId: (state, userid) => {
  // eslint-disable-next-line no-param-reassign
    state.userId = userid;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
