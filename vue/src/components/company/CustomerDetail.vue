<template>
    <div>
        <link rel="stylesheet" type="text/css"  href="http://localhost:8081/css/re_import.css">
        <link rel="stylesheet" type="text/css" href="http://localhost:8081/css/plugin/ion.rangeSlider.css">
        <link rel="stylesheet" type="text/css" href="http://localhost:8081/css/plugin/ion.rangeSlider.skinHTML5.css">
        <link rel="stylesheet"  type="text/css" href="http://localhost:8081/css/plugin/uniform.css">
        <link rel="stylesheet"  type="text/css" href="http://localhost:8081/css/plugin/jquery.scrollbar.css">
        <link rel="stylesheet" type="text/css"  href="http://localhost:8081/css/plugin/selectric.css">
        <link rel="stylesheet" type="text/css" href="http://localhost:8081/css/re_layout.css">
        <link rel="stylesheet" type="text/css" href=" http://localhost:8081/css/danawaCommon.css">
        <link rel="stylesheet" type="text/css" href=" http://localhost:8081/css/danawaCompare.css">
        <link rel="stylesheet" type="text/css" href="http://localhost:8081/css/danawaTheme.css">
        <link rel="stylesheet" type="text/css" href="http://localhost:8081/css/danawaHome.css">
        <link rel="stylesheet" type="text/css" href="http://localhost:8081/css/dnawaAuto.css">
        <div class="form_area clearFix personal_info" id="formarea">
            <customerDetail_left></customerDetail_left>
            <div class="carlist">
                <div class="mypage_CarList interest">
                    <router-link :to="{path:'/customerDetail/bestCarList'}" class="best_btn" >best 맞춤 차량</router-link>
                    <router-link :to="{path:'/customerDetail'}" class="best_btn">보유 차량 목록</router-link>
                    <router-view />
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    import customerDetail_left from "./CustomerDetail_left";
    export default {
        components:{
            customerDetail_left
        }
    }
</script>
<style scoped>

    .carlist {
        color: #333;
        font-size: 12px;
        font-family: "돋움", Dotum, "굴림", gulim, AppleGothic, Helvetica, Sans-serif;
        float: left;
        margin: 0px 15px;
        line-height: 180%;
        padding: 10px 500px 50px 10px;
        width: 500px;

        background: #fff;

    }


</style>