import axios from 'axios'
const state = {
    mycar : {},
    record: [],
    markerList: [],
    oneRecord:{}


}
const getters = {
    getMycar : state=>state.mycar,
    getRecord: state=>state.record

}
const actions = {
    async getMycar({commit},{user}){
       // let name = user.name

        let headers ={  'authorization': 'JWT fefege..',
            'Accept' : 'application/json',
            'Content-Type': 'application/json'}
        axios
            .post('http://localhost:8080/getMycar' , user ,  headers)
            .then(({data})=>{
                commit('mycarCommit', data)
                if(data.record!=null){
                    commit('recordCommit', data)
                }
                alert('axios success')
            }).catch(()=>{
                alert('axios getmycar fail')
        })

        alert('mycar')
    },
    async getRecord({commit}, {mycar}){
        let headers ={  'authorization': 'JWT fefege..',
            'Accept' : 'application/json',
            'Content-Type': 'application/json'}
        axios
            .post('http://localhost:8080/getRecord' , mycar ,  headers)
            .then(({data})=>{
                commit('recordCommit', data)
            })
            .catch(()=>{
                alert('axios getrecord fail')

            })
    },
    async addRecord({commit}, {oneRecord}){
        let headers ={  'authorization': 'JWT fefege..',
            'Accept' : 'application/json',
            'Content-Type': 'application/json'}
           // console.log(`${oneRecord.toString()}`)
            axios
                .post('http://localhost:8080/insertRecord' , oneRecord , headers)
                .then(({data})=>{
                    commit('addRecord', data.rec)


                })
                .catch(()=>{
                    alert('내역추가실패')
                })

    },
    async deleteRecord( {recordid}){

        axios.get('http://localhost:8080/deleteRecord'+recordid)
            .then(()=>{

            })
            .catch(()=>{
                alert('delete fail')
            })

    }
}
const mutations = {
    mycarCommit(state, data){
        state.mycar = data.mycar
        localStorage.setItem("mycar", JSON.stringify(data.mycar))



    },
    recordCommit(state, data){
        state.record = data.record
        localStorage.setItem("record", JSON.stringify(data.record))


    },
    addRecord(state, data ){
        state.record.add(data)
    },


}
export default {
    name: 'carbook',
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}