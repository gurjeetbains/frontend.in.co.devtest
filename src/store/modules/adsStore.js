import axios from 'axios';

const state = {

};
const getters = {};
const mutations = {};
const actions = {
  getAdDetails: async ({ rootGetters }) => {
    try {
      const result = await axios.post('/getad', { userid: rootGetters.getUserId });
      return result;
    } catch (error) {
      return error;
    }
  },
  postAd: async (context, adData) => {
    try {
      await axios.post('/postad', {
        title: adData.title,
        adType: adData.adType,
        adContent: adData.adContent,
        imagevideo: adData.imagevideo,
        createdBy: adData.createdBy,
      });
      return true;
    } catch (error) {
      return error.response.data;
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
