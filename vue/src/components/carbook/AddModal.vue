<template>

    <div style ="margin : 0 auto"> <form action="#" class="contact-form">
        <h3>정보를 입력하세요</h3>
        <input v-model="date" type="date" placeholder="날짜"/>
        <select v-model="servicecode"  >
            <option value="주유">주유</option>
            <option value="정비">정비</option>

        </select>
        <span v-if="this.servicecode==='정비'">
            <select   v-model="detail"  >
                <option v-for="i of this.service" :key="i.key" :value="i.value">{{i.value}}</option>
            </select>
        </span >

        <input v-model="price" type="text" placeholder="금액"/>
        <button @click.prevent="callAddRecord" type="submit" class="site-btn">추가</button>
    </form></div>

</template>

<script>

    export default {
        name: "addModal",
        data(){
            return {
                date: '',
                servicecode: '',
                detail: '',
                price : '',
                service : [
                    {key: 'tire' ,value: '타이어교체' }  ,{key: 'oil' ,value: '엔진오일' }
                    , {key: 'battery' ,value: '배터리' }, {key: 'all' ,value: '전체점검' },
                ]


            }
        },
        methods:{
            callAddRecord(){

                this.$store.dispatch('carbook/addRecord' , {
                    date: this.date,
                    serviceCode: this.servicecode,
                    detail: this.detail,
                    price: this.price

                })
                this.$emit('close')




            }

        },
        computed:{

        }

    }
</script>

<style scoped>

</style>