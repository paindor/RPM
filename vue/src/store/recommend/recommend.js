
const state = {
    customerDetail:'',
    recommendedCar:[]
}

const actions={
    inputDetail({commit},customer){
        commit('CUSTOMER_DETAIL_INIT',customer)
    },
    inputCar({commit},car){
        commit('RECO_CAR_INIT',car)
    }
}
const mutations = {
    CUSTOMER_DETAIL_INIT(state, customer){
        state.customerDetail=customer
    },
    RECO_CAR_INIT(state,car){
        state.recommendedCar.push(car)
        state.recommendedCar=state.recommendedCar.filter((car,index)=>state.recommendedCar.indexOf(car)===index)
    }

}
export default {
    name: 'recommend',
    namespaced: true,
    state,
    actions,
    mutations
}