import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0,
    text_QR:"",
    background_card: require("../assets/test/2.jpg")
}
const mutations = {

    mutationsSetBackground(state,img){
        return (state.background_card = img)
    },

    mutationsSetQRtext(state,text){
        return (state.text_QR = text)
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