import {createStore} from 'vuex'

export default createStore({
  state: {
    tabBarIsShow: true,
    SubShopDate:[]
  },
  mutations: {
    tabBarIsChange(state, show) {
      state.tabBarIsShow = show
    },
    addShopCart(state, cartDate) {
      state.SubShopDate.push(cartDate)
      console.log(state.SubShopDate)
    }
  },
  actions: {},
  modules: {}
})
