import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    Model:0,
    CropperVisible : false,
    uploadImage:"",
    count: 0,
    text_QR:"",
    background_card: require("../assets/cover/cover1.jpg"),

    cardtextform:{
        cardtittle:"",
        cardsubtittle:"",
        infotittle:"麓思实验室",
        infosubtittle:"技术让生活更有趣",
    }
}
const mutations = {

    SetCardModel(state,model){
        return (state.Model = model)
    },

    mutationsSetBackground(state,img){
        return (state.background_card = img)
    },

    mutationsSetQRtext(state,text){
        return (state.text_QR = text)
    },

    SetUploadImage(state,url){
        console.log("url:"+url)
        return (state.uploadImage = url)
    },

    ChangeCropperVisible(state,visible){

        return (state.CropperVisible = visible)
    },

    SetCardTextForm(state,form){
        return (state.cardtextform = form)
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