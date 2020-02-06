<template>
    <div class="v--modal-box v--modal" style="width: 600px; height: 300px;">
        <div class="modal-header">
            <div class="msg" v-if="question">
                <b style="font-size: 20px">글을 삭제하시겠습니까?</b>
            </div>
            <div class="msg" v-if="check">
                <b style="font-size: 20px">글이 삭제되었습니다.</b>
            </div>
        </div>
        <div class="example-modal-content" v-if="question">
            <button class="btn" @click="cancelCheck">예</button>
            <button class="btn" @click="$emit('close')">아니오</button>
        </div>
        <div class="example-modal-content" v-if="check">
            <button class="btn" @click="deleteCheck">확인</button>
        </div>
        <div class="vue-modal-resizer"></div>
    </div>

</template>
<script>
    import axios from "axios"
    export default {
        name: "ModifyModal",
        data(){
            return{
                question : true,
                check: false
            }
        },
        methods:{
            cancelCheck(){
                axios.get('http://localhost:8080/deleteContent/'+localStorage.getItem('boardSeq'))
                    .then(res=>{
                        if(res.data){
                            this.question = false
                            this.check=true
                        }
                    })
                    .catch(()=>{
                        alert('다시 시도해주세요')
                        this.$router.push({path : '/snsdetail'})
                    })
            },
            deleteCheck(){
                this.$router.push({path : '/sns'})
            }
        }
    }
</script>
<style scoped>
    .modal-header{
        height: 200px;
        margin: 0 auto;
    }
    .v--modal-box {
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
    }
    .v--modal {
        background-color: white;
        text-align: left;
        border-radius: 3px;
        box-shadow: 0 20px 60px -2px rgba(27, 33, 58, 0.4);
        padding: 0;
    }
    .example-modal-content {
        height: 100%;
        box-sizing: border-box;
        padding: 10px;
        font-size: 13px;
        overflow: auto;
    }
    .vue-modal-resizer {
        display: block;
        overflow: hidden;
        position: absolute;
        width: 12px;
        height: 12px;
        right: 0;
        bottom: 0;
        z-index: 9999999;
        background: transparent;
        cursor: se-resize;
    }
    button.btn:hover {
        color: #fff;
        background-color: #fac200;
    }
    button.btn {
        outline: none;
        background: #fff;
        border: 0;
        padding: 8px 12px;
        cursor: pointer;
        background-color: #212529;
        color: #fff;
        font-weight: 600;
        border-radius: 3px;
        min-width: 90px;
        margin-bottom: 8px;
        margin-top: 8px;
        margin-right: 8px;
    }
    .vue-modal-resizer {
        display: block;
        overflow: hidden;
        position: absolute;
        width: 12px;
        height: 12px;
        right: 0;
        bottom: 0;
        z-index: 9999999;
        background: transparent;
        cursor: se-resize;
    }
    .msg{
        padding:70px;
    }
    .btn{
        float: right;
        font-size: 16px;
    }
</style>