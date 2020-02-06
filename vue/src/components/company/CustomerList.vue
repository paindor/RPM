<template>
    <div>
        <div class="mypage_CarList interest">
            <div class="tit_area">
                <h3>손님 리스트</h3>
                <p></p>
            </div>

            <div class="align_field">
                <div class="all_check">
                    <div class="checker" id="uniform-allCheck"><span :class="{checked:allchecked}" @click="allcheck(customers)" :key="allchecked"><input type="checkbox" name="allCheck"
                                                                                                                                                         id="allCheck" class="uniform" title="전체체크"></span>
                    </div>
                </div>
                <div class="align">

                    <span><a href="" class="3dview_flag txt "><em class="vr_ordermark"></em> 3D 라이브 뷰 차량</a></span>

                    <span class="basic"><a href="" class="txt">기본정렬</a></span>
                    <span><a href="" class="txt">가격순</a><a href="" class="down ">낮은순</a>
												<a href="" class="up ">높은순</a>
						</span>
                    <span><a href="" class="txt">주행거리 순</a><a
                            href="" class="down ">낮은순</a>
						<a href=""
                           class="up ">높은순</a>
						</span>
                    <span><a href="" class="txt">연식 순</a><a href="" class="down ">낮은순</a>
						<a href="" class="up ">높은순</a>
						</span>
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

                    <tbody v-for="customer of customers" :key="customer.customerId">
                    <tr>
                        <td class="check">
                            <div class="checker" id="uniform-interest_list_check1">
                                <span  :class="{checked:customer.checked}" @click="check(customer)" @change='updateCheckall(customers)' >
                                    <input type="checkbox" id="interest_list_check1" class="uniform"  >
                                </span>
                            </div>
                        </td>
                        <td class="thumb">
                            <a @click="goDetail(customer)" >
                                <img src="@/assets/image/user_default.jpg" style="width: 120px" alt="고객 썸네일">
                            </a>
                        </td>
                        <td class="car_info">
                            <a  @click="goDetail(customer)" class="name">{{customer.modelNm}}</a>
                            <span class="md_year">연식 :{{customer.minBeginYear}}년 ~{{customer.maxBeginYear}}년 </span>
                            <span class="price">가격 :{{customer.minPrice|thousandFormatter}}만원 ~{{customer.maxPrice|thousandFormatter}} 만원  <br>주행거리 :{{customer.minMilage|thousandFormatter}}km ~ {{customer.maxMilage|thousandFormatter}}km  </span>
                        </td>
                        <td class="car_opt">
                            <ul class="opt_list">
                                <li>
                                    <span class="pt">{{customer.transmissioncdName}}</span>
                                    <span>{{customer.fuleTypedName}}</span>
                                </li>

                            </ul>


                        </td>

                    </tr>


                    </tbody>
                </table>
            </div>

            <div class="btn_cont">
                <a href="" class="delete" >선택삭제</a>
            </div>

            <pagination :pagination="List" @movePage="movePageBlock" ref="pagination"></pagination>
        </div>
    </div>
</template>
<script>
    import {checkBox} from "../mixins/checkBox";
    import pagination from "../common/Pager";
    import axios from "axios"
    export default {
        components:{
            pagination
        },
        data(){
            return {
                allchecked:false,
                List:[],
                customers:[],
                context:'http://localhost:8080/',

            }
        },
        methods: {
            movePageBlock(pagination){
                this.customers=pagination
            },
            goDetail(customer){

                localStorage.setItem("customerDetail",JSON.stringify(customer))
                this.$store.dispatch('recommend/inputDetail',customer)
                this.$router.push('/customerDetail')
            }




        },
        filters : {
            thousandFormatter: function (value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        },
        mixins:[checkBox],
        created() {
            axios
                .get(`http://localhost:8080//recommend/customerList/`+localStorage.getItem("userId"))
                .then(({data})=>{
                    data.forEach(el=>{
                        el.checked=false
                        this.List.push(el)
                    })
                    this.$refs.pagination.first()
                })
                .catch(e=>{
                    alert(`axios fail${e}`)
                })



        },


    }
</script>