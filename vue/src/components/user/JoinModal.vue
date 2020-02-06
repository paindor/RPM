<template>
    <div class="v--modal-box v--modal" style="width: 600px; height: 300px;">
        <div class="modal-header">
            <div class="msg">
                <b style="font-size: 20px">회원가입을 취소하시겠습니까?</b>
            </div>
        </div>
        <div class="example-modal-content">
            <button class="btn" @click="cancelCheck">취소할래요</button>
            <button class="btn" @click="$emit('close')">계속할래요</button>
        </div>
        <div class="vue-modal-resizer"></div>
    </div>

</template>
<script>
    export default {
        name: "JoinModal",
        methods:{
            cancelCheck(){
                this.$router.push({path : '/'})
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
    button.btn {
        outline: none;
        background: #fff;
        border: 0;
        padding: 8px 12px;
        cursor: pointer;
        color: #fff;
        background: rgba(9, 38, 70, 0.92);
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