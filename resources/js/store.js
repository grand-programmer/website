import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
        barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
        drawer: null,
        //snackbars: [],
        menu: [],
        footermenu: [],
        viewed: [],
        loading: false
    },
    mutations: {
        SET_BAR_IMAGE(state, payload) {
            state.barImage = payload
        },
        SET_DRAWER(state, payload) {
            state.drawer = payload
        },
/*        SET_SNACKBAR(state, snackbar) {
            state.snackbars.push(snackbar);
        },*/
        SET_MENU(state, menu) {
            state.menu.push(menu);
        },
        SET_FOOTER_MENU(state, footermenu) {
            state.footermenu.push(footermenu);
        },
        SET_USER_VIEWED(state, viewed) {
            state.viewed.push(viewed);
        },
        setLoading(state, bool) {
            state.loading = bool;
        }
    },
    getters:{
        getLoading: state => {
            return state.loading;
        },
        getFooterMenu: state => {
            return state.footermenu;
        },
        getUserViewed: state => {
            return state.viewed;
        }

    },
    actions: {
/*        setSnackbar({commit}, snackbar) {
            snackbar.showing = true;
            snackbar.timeout = 5000;
            snackbar.color = snackbar.color || 'primary';
            if (!snackbar.text) {
                if (snackbar.color == 'default') snackbar.text = 'Маълумотлар омадли тарзда юкланди! ';
                else snackbar.text = 'Маълумотлар юборишда хатолик юз берди! ';
            }
            commit('SET_SNACKBAR', snackbar);
        },*/
        SET_MENU({commit}, menu) {
            commit('SET_MENU', menu);
        },
        SET_FOOTER_MENU({commit}, footermenu) {
            commit('SET_FOOTER_MENU', footermenu);
        },
        SET_USER_VIEWED({commit}, viewed) {
            commit('SET_USER_VIEWED', viewed);
        },

    },
})
