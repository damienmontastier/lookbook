import Vuex from 'vuex'

import appData from '~/static/data/data.json'

const createStore = () => {
  return new Vuex.Store({
    /* --

    STATE

    */
    state: {
      appLoaded: false,
      appData: appData
    },

    /* --

    MUTATIONS

    */
    mutations: {
      SET_APP_LOADED(state, bool) {
        state.appLoaded = bool
      }
    },

    /* --

    ACTIONS

    */

    actions: {
      nuxtServerInit({
        commit
      }) {
        return Promise.all([

        ]).then(() => {

        }).catch(console.error)

      },

      setAppLoaded({
        commit
      }, bool) {
        commit('SET_APP_LOADED', bool)
      }
    },

    /* --

    GETTERS

    */

    getters: {
      isAppLoaded: (state) => {
        if (!state) return
        return state.appLoaded
      }
    }

  })
}

export default createStore
