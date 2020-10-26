import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const state = () => (
      {
           
      }
);

export const mutations = {
      mutationer(state, payload) {
            let keys = Object.keys(payload);
            for (let item of keys) {
                  state[item] = payload[item]
            }
      },
};

export const actions = {
      // async nuxtServerInit(_, {req, app, redirect}) {
      //       let profile_response = await app.$api_service.request({name: 'profile'});
      //       if (!(!profile_response.response && profile_response && profile_response.status === 200)) return redirect('/authentication');
      // }
};
