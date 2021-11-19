import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    drawer: null,
    snackbars:[],
  },
  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    SET_SNACKBAR(state, snackbar) {
       state.snackbars.push(snackbar);
    },
  },
  actions: {
      setSnackbar({commit}, snackbar) {
          snackbar.showing = true;
          snackbar.timeout = 5000;
          snackbar.color = snackbar.color || 'primary';
          if(!snackbar.text) {
              if (snackbar.color == 'default') snackbar.text = 'Маълумотлар омадли тарзда юкланди! ';
              else snackbar.text = 'Маълумотлар юборишда хатолик юз берди! ';
          }
          commit('SET_SNACKBAR', snackbar);
      },

  },
})
