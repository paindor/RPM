<template>
    <div>

        <div>



            <div class="align_field">
                <div class="all_check">
                    <div class="checker" id="uniform-allCheck">
                        <span :class="{checked:allchecked}" @click="allcheck(cars)" :key="allchecked"><input type="checkbox" name="allCheck" id="allCheck" class="uniform" title="전체체크"></span>
                    </div>
                </div>
                <div class="align">
                    <!-- &lt;!&ndash; 20181217 VR차량 &ndash;&gt;
                     <span><a href="" class="3dview_flag txt "><em class="vr_ordermark"></em> 3D 라이브 뷰 차량</a></span>
                     &lt;!&ndash; //20181217 VR차량 &ndash;&gt;
                     <span class="basic"><a href=""
                                            class="txt">기본정렬</a></span>
                     <span><a href="" class="txt">가격순</a><a href="" class="down ">낮은순</a>
                                                 <a href="" class="up ">높은순</a>
                         </span>
                     <span><a href="" class="txt">주행거리 순</a><a
                             href="" class="down ">낮은순</a>
                         <a href=""
                            class="up ">높은순</a>
                         </span>
                     <span><a href="" class="txt">연식 순</a><a
                             href="" class="down ">낮은순</a>
                         <a href="" class="up ">높은순</a>
                         </span>-->
                </div>
            </div>
            <div class="result_list">
                <table>
                    <caption>관심차량</caption>

                    <colgroup>
                        <col style="width: 55px;">
                        <col style="width: 190px;">
                        <col style="width: 485px;">
                        <col style="width: 290px;">
                        <col>
                    </colgroup>

                    <tbody  v-for="car of cars" :key="car.carcd">
                    <tr>
                        <td class="check">
                            <div class="checker" id="uniform-interest_list_check1">
                                <span  :class="{checked:car.checked}" @click="check(car)" @change='updateCheckall(cars)'>
                                    <input type="checkbox" id="interest_list_check1" class="uniform"  >
                                </span>
                            </div>
                        </td>
                        <td class="thumb">
                            <a  >
                                <img @click="productClick(car)" :src="car.middleImg" alt="자동차 썸네일">
                            </a>
                        </td>
                        <td class="car_info">
                            <a @click="productClick(car)" class="name">모델명:{{car.modelnm}} </a>
                            <span class="md_year">연식:{{car.beginYear}}년 &nbsp;<br>주행거리:{{car.milage|thousandFormatter}}km</span>
                            <span class="price">가격{{car.price|thousandFormatter}}만원 </span>
                        </td>
                        <td class="car_opt">
                            <ul class="opt_list">
                                <li>
                                    <span class="pt">{{car.recCommentCd|acident}}</span>
                                    <span>{{car.fuleTypedName}}</span>
                                </li>
                                <li>
                                    <span>{{car.exteriorColornm}}</span>
                                    <span>{{car.categorynm}}</span>
                                </li>
                                <li>
                                    <span>{{car.centerRegion}}</span>
                                    <span>{{car.passCnt}}인승</span>
                                </li>
                            </ul>


                        </td>

                    </tr>


                    </tbody>
                </table>
            </div>

            <div class="btn_cont">
                <button @click="pop_rendar" class="delete" >추가</button>
                <modals-container />
            </div>
            <pagination :pagination="List" @movePage="movePageBlock" ref="pagination"></pagination>


        </div>
    </div>
</template>
<script>

    import {checkBox} from "../mixins/checkBox";
    import axios from'axios'
    import pagination from "../common/Pager";
    import sendCarPop from "./SendCarPop";
    export default {
        components:{
            pagination
        },
        data(){
            return {
                context:'http://localhost:8080/',
                allchecked:false,
                List:[],
                checkedList:[],
                cars:[]

            }
        },
        methods: {
            movePageBlock(pagination){
                this.cars= pagination
                this.allchecked=false
            },
            productClick(carItem){
                this.$store.dispatch('contents/setProduct',carItem)
                this.$router.push('/product')
            },
            pop_rendar(){

                for(let i=0;i<this.cars.length;i++) {

                    if (!this.$store.state.recommend.recommendedCar.length<5&&this.cars[i].checked == true) {
                        this.$store.dispatch('recommend/inputCar',this.cars[i])
                    }else if(this.$store.state.recommend.recommendedCar.length==5){
                        alert('최대 5개까지 가능합니다')
                    }
                }
                this.$modal.show(sendCarPop,{
                    // checkedList : this.checkedList,
                    modal : this.$modal},{
                    name: 'dynamic-modal',
                    width : '980px',
                    height : '680px',
                    draggable: true,
                },{closed:this.checkedList=[]})
            },

        },
        mixins:[checkBox],
        created(){
            axios
                .get(`${this.context}/company/carList/`+localStorage.getItem('userId'))
                .then(res=>{
                    res.data.result.forEach(el=>{
                        el.checked=false
                        this.List.push(el)

                    })
                    this.$refs.pagination.first()

                })
                .catch(e=>{
                    alert(`axios fail${e}`)
                })

        },
        filters : {
            thousandFormatter: function (value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
            acident(value){
                switch (value) {
                    case '001': value='무사고';break;
                    case '002': value='단순교환';break;
                    case '003': value='단순사고(접촉)';break;
                    case '004': value='사고';break;
                }
                return value
            }
        },

    }


</script>
<style>
    .center_btn button{
        display: inline-block;
        width: 217px;
        height: 45px;
        line-height: 43px;
        margin-left: 2px;
        border: 1px solid #000;
        text-align: center;
        font-size: 13px;
    }
    .best_btn{
        padding: 10px;
        width: 120px;
        text-align: center;
        font-family: 'Malgun Gothic', '맑은 고딕', sans-serif;
        border: 1px solid #666666;
    }
</style>