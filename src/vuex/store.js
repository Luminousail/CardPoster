import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0,
    background_card: require("../assets/test/2.jpg")
}
const mutations = {

    mutationsSetBackground(state,img){
        return (state.background_card = img)
    },

    mutationsAddCount(state, n = 0) {
        return (state.count += n)
    },
    mutationsReduceCount(state, n = 0) {
        return (state.count -= n)
    }
}

const actions = {
    actionsAddCount(context, n = 0) {
        console.log(context)
        return context.commit('mutationsAddCount', n)
    },
    actionsReduceCount({ commit }, n = 0) {
        return commit('mutationsReduceCount', n)
    }
}
const getters = {
    getterCount(state, n = 0) {
        return (state.count += n)
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})