<template>
    <div >

        <div class="mypage_CarList interest">
            <div class="tit_area">
                <h3>추천받은 차</h3>
                <p>추천받은 차량은 최대 3개월 동안 보관되며 판매완료시 삭제됩니다.</p>

            </div>

            <div class="align_field">
                <div class="all_check">
                    <div class="checker" id="uniform-allCheck">
                        <span :class="{checked:allchecked}" @click="allcheck(List)" :key="allchecked"><input type="checkbox" name="allCheck" id="allCheck" class="uniform" title="전체체크"></span>
                    </div>
                </div>
                <div class="align">
                    <!-- 20181217 VR차량 -->
                    <span><a href="" class="3dview_flag txt "><em class="vr_ordermark"></em> 3D 라이브 뷰 차량</a></span>
                    <!-- //20181217 VR차량 -->
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
						</span>
                </div>
            </div>
            <div class="result_list">
                <colgroup>
                    <col style="width: 55px;">
                    <col style="width: 190px;">
                    <col style="width: 485px;">
                    <col style="width: 290px;">
                    <col>
                </colgroup>
                <h1 class="emptySign" v-if="recommendedCar.length==0">등록된 차량이 없습니다</h1>
                <table>

                    <tbody v-for="car of recommendedCar" :key="car.cid">
                    <tr>
                        <td class="check">
                            <div class="checker" id="uniform-interest_list_check1">
                                <span  :class="{checked:car.checked}" @click="check(car)" @change='updateCheckall(List)' >
                                    <input type="checkbox" id="interest_list_check1" class="uniform"  >
                                </span>
                            </div>
                        </td>
                        <td class="thumb">
                            <a @click="productClick(car)">
                                <img  :src="car.middleImg" alt="자동차 썸네일">
                            </a>
                        </td>
                        <td class="car_info">
                            <span class="md_year">{{car.centerName}}</span>
                            <a @click="productClick(car)" class="name">{{car.makenm}} {{car.modelnm}} </a>
                            <span class="md_year">{{car.beginYear}}년 주행거리 : {{car.milage}} km </span>
                            <span class="price">가격 :{{car.price}}만원 </span>
                        </td>
                        <td class="car_opt">
                            <ul class="opt_list">
                                <li>
                                    <span class="pt">{{car.transmissioncdName}}</span>
                                    <span>{{car.fuleTypedName}}</span>
                                </li>
                                <li>
                                    <span>{{car.exteriorColornm}}</span>
                                    <span>{{car.carType}}</span>
                                </li>
                                <li>
                                    <span>{{car.centerRegion}}</span>
                                    <span>{{car.passCnt}}</span>
                                </li>
                            </ul>


                        </td>
                        <td class="btn_area">
                            <a href="/buycar" class="online" id="onlineBuy0">온라인 구매 </a>
                        </td>
                    </tr>


                    </tbody>
                </table>
            </div>

            <div class="btn_cont">
                <a href="" class="delete" >선택삭제</a>

                <div class="center_btn">
                    <button  href="" @click="pop_rendar">한눈에 비교하기</button>
                    <modals-container />
                </div>
            </div>

            <Pagination2 :pagination="List" @movePage="movePageBlock" ref="pagination"></Pagination2>

        </div>
    </div>
</template>
<script>
    import comparePop from "./ComparePop";
    import {checkBox} from "../mixins/checkBox";
    import axios from 'axios';
    import Pagination2 from "../common/Pager";

    export default {
        components:{
            Pagination2
        },
        data(){
            return {
                allchecked:false,
                List:[],
                checkedList:[

                ],
                recommendedCar:[]

            }
        },
        methods: {

            pop_rendar(){

                for(let i=0;i<this.List.length;i++) {
                    if (this.List[i].checked == true) {
                        this.checkedList.push(this.List[i])
                    }
                }
                this.$modal.show(comparePop,{
                    checkedList : this.checkedList,
                    modal : this.$modal},{
                    name: 'dynamic-modal',
                    width : '800px',
                    height : '650px',
                    draggable: true,
                },{closed:this.checkedList=[]})
            },
            addHistory( carItem ){
                this.$store.dispatch( 'contents/addSeenHistory' , carItem )
            },
            productClick(carItem){
                this.addHistory(carItem)
                this.$store.dispatch('contents/setProduct',carItem)
                this.$router.push('/product')
            },
            movePageBlock(pagination){
                this.recommendedCar=pagination
            },




        },
        mixins:[checkBox],
        created() {
            axios
                .get(`http://localhost:8080//recommendedCar/getRecommendedCar/`+localStorage.getItem("userId"))
                .then(({data})=>{
                    data.forEach(el=>{
                        el.cars.checked=false
                        this.List.push(el.cars)
                    })
                    this.$refs.pagination.first()
                })
                .catch(e=>{
                    alert(`axios fail${e}`)
                })
        }
    }


</script>
<style>
    .emptySign{
        font-size: large;
        text-align: center;
        padding: 50px;
    }
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
</style>