import axios from 'axios'
import router from '@/router'
const state = {
    user : {},
    auth: false,
    fail: false
}
const getters = {

    getUser : state=>state.user,
    getIsAuth : state=>state.auth,
    getFail : state=> state.fail
}
const actions = {
    async login({commit}, { userid, passwd}){
        let url = `http://localhost:8080/login`
        let headers ={  'authorization': 'JWT fefege..',
            'Accept' : 'application/json',
            'Content-Type': 'application/json'}
        axios.post(url, {userid,passwd}, headers)

            .then(({data})=>{

                function getCar(user) {
                    let url = `http://localhost:8080/getMycar`
                    let headers ={  'authorization': 'JWT fefege..',
                        'Accept' : 'application/json',
                        'Content-Type': 'application/json'}
                    axios.post(url, user, headers)
                        .then(({data})=>{
                            if(data.result == true) {

                                if (data.mycar) {
                                    commit('carbook/mycarCommit', data , {root:true})


                                    if (data.record) {
                                        commit('carbook/recordCommit', data , {root:true})
                                    }
                                }
                            }
                        })
                        .catch(()=>{
                            alert('getcar fail')
                        })

                }

                //alert(data.result.toString())
                if(data.result == true) {
                    commit('LOGIN_COMMIT', data)
                    localStorage.setItem('auth',data.user.auth)
                    localStorage.setItem("token", data.token)
                    localStorage.setItem("userId",data.user.userid)
                    getCar(data.user)
                    if(data.user.auth==0) {
                        router.push('/')
                    }else{

                        router.push('/companyHome')
                    }
                }else{
                    commit('fail_commit')
                }
            })
            .catch(()=>{
                alert('axios fail')
            })

    },


    async logout({commit}){
        commit('LOGOUT_COMMIT')
        localStorage.removeItem("token")
        localStorage.removeItem("mycarId")
        localStorage.removeItem("userId")


    },
    async getUserInfo({commit}){
        function getCar(user) {
            let url = `http://localhost:8080/getMycar`
            let headers ={  'authorization': 'JWT fefege..',
                'Accept' : 'application/json',
                'Content-Type': 'application/json'}
            axios.post(url, user, headers)
                .then(({data})=>{
                    if(data.result == true) {

                        if (data.mycar) {
                            commit('carbook/mycarCommit', data , {root:true})


                            if (data.record) {
                                commit('carbook/recordCommit', data , {root:true})
                            }
                        }
                    }
                })
                .catch(()=>{
                    alert('getcar fail')
                })

        }
        let token = localStorage.getItem("token")
        let headers = {  'authorization': 'JWT fefege..',
            'Accept' : 'application/json',
            'Content-Type': 'application/json'}
        axios.post('http://localhost:8080/getUserInfo/'+token , headers)
            .then(({data})=>{

                if(data.result == true){
                    getCar(data.user)


                    commit('LOGIN_COMMIT', data)
                }else{
                    commit('LOGOUT_COMMIT')

                }
            })


    }



}
const mutations = {
    LOGIN_COMMIT(state, data){
        state.auth = true
        state.user = data.user

    },

    LOGOUT_COMMIT(state){
        state.auth = false
        state.user  = {}

        state.member  = {}
    },
    fail_commit(state){
        state.fail = true

    },

}
export default {
    name: 'user',
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}