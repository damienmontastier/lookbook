import Vuex from 'vuex'

import appData from '~/static/data/data.json'

const createStore = () => {
  return new Vuex.Store({
    /* --

    STATE

    */
    state: {
      appLoaded: false,
      appData: appData,
      current: 1
    },
    /* --

    MUTATIONS

    */
    mutations: {
      SET_APP_LOADED(state, bool) {
        state.appLoaded = bool
      },
      // increment state for current slide
      increment(state) {
        state.current++

        if (state.current - 1 == Object.keys(appData.slider).length) {
          state.current = 1
        }
      },
      decrement(state) {
        state.current--

        if (state.current == 0) {
          state.current = Object.keys(appData.slider).length
        }
      },
      // reset state when current slide is max
      reset(state) {
        state.current = 1
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
