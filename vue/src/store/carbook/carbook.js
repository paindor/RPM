import axios from 'axios'
import router from '@/router'

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

        let headers ={  'authorization': 'JWT fefege..',
            'Accept' : 'application/json',
            'Content-Type': 'application/json'}
        axios
            .post('http://localhost:8080/getMycar' , user ,  headers)
            .then(({data})=>{
                alert('response')
                commit('mycarCommit', data)
                if(data.record!=null){
                    commit('recordCommit', data)
                }
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
    async addRecord( {commit}, {date,
                          serviceCode,
                          detail,
                          price})
    {
        let headers ={  'authorization': 'JWT fefege..',
            'Accept' : 'application/json',
            'Content-Type': 'application/json'}

        let mecar = localStorage.getItem("mycarId")

        axios
            .post(`http://localhost:8080/insertRecord/`+ mecar ,{date, serviceCode,detail,price} , headers)
            .then(({data})=>{
                alert(data)
                if(data.result == true){
                    alert('success')
                    commit('addRecord', data)
                }else{
                    alert('fail')
                }

                //console.log('in the add ' + data)



            })
            .catch(()=>{
                alert('내역추가실패')
            })

    },
    async deleteRecord({commit}, {id} ){
        alert('' )
        //console.log(`id === ${this.id}`)
        alert(`inthe deleterec  ${id}`)
        let mecar = localStorage.getItem("mycarId")
        alert('http://localhost:8080/deleteRecord/'+id +"/" +mecar)
        axios.delete('http://localhost:8080/deleteRecord/'+id +"/" +mecar)
            .then(({data})=>{
                if(data.result == true){
                    commit('recordCommit', data)

                }
            })
            .catch(()=>{
                alert('delete fail')
            })

    },
    async mycarRegist({commit},  dd ){

        let headers = {
            'authorization': 'JWT fefege..',
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }
        let mycar = {
            brand: dd.brand,
            distance: dd.distance,
            model: dd.model,
            carImg: dd.img,
            month: dd.month,
            year: dd.year
        }
        let url = 'http://localhost:8080/registMycar/'+dd.userid
        axios.post(url, mycar, headers )
            .then(({data})=>{

                commit('mycarCommit', data)
                router.push('/mypage')
            })


    }
}
const mutations = {
    mycarCommit(state, data){
        state.mycar = data.mycar
        localStorage.setItem("mycarId", data.mycar.mycarId)


    },
    recordCommit(state, data){
        state.record = data.record
    },
    addRecord(state, data ){
        state.record.unshift(data.rec)
    },
    testCommit(state, data){
        alert('test' +data)
        state.mycar = data;

    }


}
export default {
    name: 'carbook',
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}