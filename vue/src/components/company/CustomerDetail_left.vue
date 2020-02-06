<template>
    <div class="condition">

        <h4 class="title">{{customerInfo.name}} 고객님의 요구사항</h4>
        <div class="compBox">
            <div class="compLeft">
                <table class="tableComp left body" cellspacing="0" >
                    <tbody>

                    <tr v-for="col of columns" :key="col">
                        <td>{{col}}</td>
                    </tr>

                    </tbody>
                </table>
            </div>
            <div class="compRight">
                <table class="tableComp right body" cellspacing="0" id="compRightBody" style="width: 300px;">
                    <tbody>
                    <tr  type="gapSpec" >
                        <td>{{customerInfo.makeNm}} {{customerInfo.modelNm}}<br></td>
                    </tr>
                    <tr  type="gapSpec" >
                        <td>{{customerInfo.minPrice|thousandFormatter}}만원 ~ {{customerInfo.maxPrice|thousandFormatter}}만원<br></td>
                    </tr>
                    <tr  type="gapSpec" >
                        <td>{{customerInfo.minBeginYear}}년 ~ {{customerInfo.maxBeginYear}}년</td>
                    </tr>
                    <tr  type="gapSpec" >
                        <td>{{customerInfo.minMilage|thousandFormatter}}km ~ {{customerInfo.maxMilage|thousandFormatter}}km</td>
                    </tr>
                    <tr  type="gapSpec" >
                        <td>{{customerInfo.fuleTypedName}}</td>
                    </tr>
                    <tr  type="gapSpec" >
                        <td>{{customerInfo.transmissioncdName}}</td>
                    </tr>



                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "carDetail_left",
        data(){
            return{
                customerInfo:JSON.parse( localStorage.getItem("customerDetail"))
                ,
                columns:[
                    '희망 기종', '가격','연식','주행거리','연료','변속기'
                ],

            }

        },
        filters : {
            thousandFormatter: function (value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        },

    }
</script>

<style scoped>
    .condition {
        color: #333;
        font-size: 12px;
        font-family: "돋움", Dotum, "굴림", gulim, AppleGothic, Helvetica, Sans-serif;
        float: left;
        margin-top: 300px ;
        line-height: 180%;
        padding: 50px 40px;
        width: 400px;
        background: #fff;
        border: 1px solid #666666;
        margin-left: 100px;

    }

    .title {
        color: #333;
        text-align: left;
        margin: 20px 30px;
        padding: 0;
        line-height: 180%;
        padding-top: 5px;
        font-size: 30px;
        font-weight: bold;
        font-family: 맑은고딕, 'Malgun Gothic';
        width: 500px;
        align-content: center;
    }

    table.tableComp.left.body{
        margin: 0px;

    }
    .tableComp.left.body td {
        padding: 7px 0;
        border-right: 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
        background: #ffffff;
        text-align: center;
        position: relative;
        height: 21px;
        font-weight: bold;
    }
    .tableComp.right.body td {
        padding: 7px 0;
        border-right: 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
        background: #ffffff;
        text-align: center;
        position: relative;
        height: 21px;

    }


</style>