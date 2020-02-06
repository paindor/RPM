<template>
    <div class="helpCar">

        <div class="helpTab">
            <!-- B -->
            <div class="tab1">
                <h3 class="on">
                    <b>딜러에게 차 추천 받기</b>
                </h3>
                <div class="tabCont">
                    <form name="frmB" id="frmB" >

                        <div class="tabContBx">


                            <!-- 로그인 전 -->



                            <div class="st2">
                                <p class="help_must">필수입력정보*</p>
                                <div class="detail">
                                    <div class="le">
                                        <div class="deType01">
                                            <h5>차량정보 <span class="icon_must">*</span></h5>

                                            <div>
                                                <!-- -->
                                                <div class="searchr1">
                                                    <div id="Key1" @click="searchKeyClick(`Key1`)"
                                                         class="selectric-wrapper selectric-selectric selectric-below selectric-hover">
                                                        <div class="selectric-hide-select">
                                                            <select
                                                                    title="제조사를 선택하세요"
                                                                    class="selectric"
                                                                    data-beusable-tracking=""
                                                                    tabindex="-1"
                                                                    v-for="category of this.$store.state.contents.category1"
                                                                    :key="category.name">
                                                                <option data-type="MAKE_TYPE010"
                                                                        data-cnt="category.count">{{category.name}}</option>
                                                            </select></div>
                                                        <div class="selectric" ><span class="label"
                                                                                      data-beusable-tracking="" >{{recommend.makeNm}}</span></div>
                                                        <div id = "category1" class="selectric-items" tabindex="-1">
                                                            <div class="selectric-scroll" style="width: 477px; visibility: visible; display: block;">
                                                                <ul v-for="category of this.$store.state.contents.category1" :key="category.name">
                                                                    <li data-index="1" @click="setCategory2(category)" class="">{{category.name}}<em>{{category.count}}</em>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <input class="selectric-input" tabindex="0"></div>
                                                </div>


                                                <!-- -->

                                            </div>
                                        </div>
                                        <div class="deCarType">

                                            <div class="searchr2">
                                                <div id="searchKey2"  @click="searchKeyClick(`searchKey2`)"
                                                     class="selectric-wrapper selectric-selectric selectric-below selectric-hover">
                                                    <div class="selectric-hide-select"><select
                                                            id="modelGroupList" title="모델을 선택하세요"
                                                            class="selectric" data-beusable-tracking=""
                                                            tabindex="-1"
                                                            v-for="category of this.$store.state.contents.category2"
                                                            :key="category.name">
                                                        <option data-type="MAKE_TYPE010"
                                                                data-cnt="category.count">{{category.name}}</option>
                                                    </select></div>
                                                    <div class="selectric"><span class="label"
                                                                                 data-beusable-tracking="">{{recommend.modelGrpNm}}</span></div>
                                                    <div id = "category2" class="selectric-items" tabindex="-1" >
                                                        <div class="selectric-scroll" style="width: 477px; visibility: visible; display: block;">
                                                            <ul v-for="category of this.$store.state.contents.category2" :key="category.name">
                                                                <li data-index="1" @click="setCategory3(category.name, category.count)" class="">{{category.name}}<em>{{category.count}}</em>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <input class="selectric-input" tabindex="0"></div>
                                            </div>
                                        </div>
                                        <div class="deCarType">

                                            <div class="searchr3">
                                                <div id="searchKey3" @click="searchKeyClick(`searchKey3`)"

                                                     class="selectric-wrapper selectric-selectric selectric-below selectric-hover">
                                                    <div class="selectric-hide-select">

                                                        <select id="modelList" title="세부모델을 선택하세요" class="selectric" data-beusable-tracking="" tabindex="-1" v-for="category of this.$store.state.contents.category3" :key="category.name">

                                                            <option data-type="MAKE_TYPE010"
                                                                    data-cnt="category.count">{{category.name}}</option>
                                                        </select></div>
                                                    <div class="selectric"><span class="label"
                                                                                 data-beusable-tracking="">{{recommend.modelNm}}</span></div>
                                                    <div class="selectric-items" tabindex="-1">
                                                        <div class="selectric-scroll" style="width: 477px; visibility: visible; display: block;">
                                                            <ul v-for="category of this.$store.state.contents.category3" :key="category.name">
                                                                <li data-index="1" @click="setKeyWord3(category.name, category.count)" class="">{{category.name}}<em>{{category.count}}</em>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <input class="selectric-input" tabindex="0"></div>
                                            </div>
                                        </div>



                                        <div class="deType02">
                                            <div class="type_le">
                                                <h5>연식 <span class="icon_must">*</span></h5>
                                                <div   id="startYear"  class="selectric-wrapper selectric-selectric selectric-below selectric-hover" @click= "searchKeyClick(`startYear`)">
                                                    <div class="selectric-hide-select">
                                                        <select name="wr_gt_v_mfr_date"  class="selectric" data-unit="년">
                                                            <option v-for="year of maxYears" :key="year" value="">{{year}}</option>

                                                        </select></div>
                                                    <div class="selectric"><span class="label" >{{recommend.minBeginYear}}</span></div>
                                                    <div class="selectric-items" tabindex="-1">
                                                        <div  class="selectric-scroll" style="width: 230px; visibility: visible; display: block;">
                                                            <ul v-for="(year,index) of minYears" :key="year.year">
                                                                <li  @click="selectMinYear(year,index)" class="">{{year}}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <input class="selectric-input" tabindex="0"></div>

                                            </div>
                                            <div class="type_ri">
                                                <div class="selectric-wrapper selectric-selectric selectric-hover" id="endYear"  @click= "searchKeyClick(`endYear`)">
                                                    <div class="selectric-hide-select">
                                                        <select name="wr_lt_v_mfr_date"  class="selectric" data-unit="년" tabindex="-1">
                                                            <option v-for="year of maxYears" :key="year" value="">{{year}}</option>
                                                        </select></div>
                                                    <div class="selectric"><span class="label" data-beusable-tracking="">{{recommend.maxBeginYear}}</span></div>
                                                    <div class="selectric-items" tabindex="-1">
                                                        <div class="selectric-scroll" style="width: 230px; visibility: visible; display: block;">
                                                            <ul>
                                                                <li @click="recommend.maxBeginYear=year" v-for="year of maxYears" :key="year" data-index="0" class="">{{year}}</li>

                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <input class="selectric-input" tabindex="0"></div>

                                            </div>
                                        </div>
                                        <div class="deType02">
                                            <div class="type_le">
                                                <h5>주행거리 <span class="icon_must">*</span></h5>
                                                <div id="startKM"  class="selectric-wrapper selectric-selectric selectric-below selectric-hover" @click= "searchKeyClick(`startKM`)">
                                                    <div class="selectric-hide-select"><select name="wr_gt_v_mfr_date"
                                                                                               class="selectric"
                                                                                               data-unit="년">
                                                        <option v-for="milage of minMilages" :key="milage" value="">{{milage}}</option>

                                                    </select></div>
                                                    <div class="selectric"><span class="label" >{{recommend.minMilage|thousandFormatter}}</span></div>
                                                    <div class="selectric-items" tabindex="-1">
                                                        <div class="selectric-scroll" style="width: 230px; visibility: visible; display: block;">
                                                            <ul>
                                                                <li @click="selectMilage(milage,index)" v-for="(milage,index) of minMilages" :key="milage" class="">{{milage|thousandFormatter}}</li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <input class="selectric-input" tabindex="0"></div>

                                            </div>
                                            <div class="type_ri">
                                                <div class="selectric-wrapper selectric-selectric selectric-hover" id="endKM"  @click= "searchKeyClick(`endKM`)">
                                                    <div class="selectric-hide-select"><select name="wr_lt_v_mfr_date"
                                                                                               id="modelYear02" class="selectric"
                                                                                               data-unit="년"
                                                                                               tabindex="-1">
                                                        <option v-for="milage of maxMilages" :key="milage" value="">{{milage}}</option>

                                                    </select></div>
                                                    <div class="selectric"><span class="label" data-beusable-tracking="">{{recommend.maxMilage|thousandFormatter}}</span></div>
                                                    <div class="selectric-items" tabindex="-1">
                                                        <div class="selectric-scroll" style="width: 230px; visibility: visible; display: block;">
                                                            <ul>
                                                                <li @click="recommend.maxMilage=milage" v-for="milage of maxMilages" :key="milage" class="">{{milage|thousandFormatter}}</li>

                                                            </ul>
                                                        </div>

                                                    </div>
                                                    <input class="selectric-input" tabindex="0"></div>

                                            </div></div>
                                    </div>
                                    <div class="ri">
                                        <div class="deType01">
                                            <div class="type_ le">
                                                <h5>변속기</h5>
                                                <div id="transMission"  class="selectric-wrapper selectric-selectric selectric-below selectric-hover" @click= "searchKeyClick(`transMission`)">
                                                    <div class="selectric-hide-select"><select name="wr_gt_v_mfr_date" id="modelYear01" class="selectric" data-unit="년">
                                                        <option v-for="trans of transmissions" :key="trans" value="">{{trans}}</option>

                                                    </select></div>
                                                    <div class="selectric"><span class="label" >{{recommend.transmissioncdName}}</span></div>
                                                    <div class="selectric-items" tabindex="-1">
                                                        <div class="selectric-scroll" style="width: 230px; visibility: visible; display: block;">
                                                            <ul>
                                                                <li @click="recommend.transmissioncdName=trans" v-for="trans of transmissions" :key="trans" class="">{{trans}}</li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <input class="selectric-input" tabindex="0"></div>
                                            </div>
                                            <div class="type_ri">
                                                <h5>연료</h5>
                                                <div id="fuel"  class="selectric-wrapper selectric-selectric selectric-below selectric-hover" @click= "searchKeyClick(`fuel`)">
                                                    <div class="selectric-hide-select"><select name="wr_gt_v_mfr_date"  class="selectric" data-unit="년">
                                                        <option v-for="fuel of fuels" :key="fuel" value="">{{fuel}}</option>
                                                    </select></div>
                                                    <div class="selectric"><span class="label" >{{recommend.fuleTypedName}}</span></div>
                                                    <div class="selectric-items" tabindex="-1">
                                                        <div class="selectric-scroll" style="width: 230px; visibility: visible; display: block;">
                                                            <ul>
                                                                <li @click="recommend.fuleTypedName=fuel" v-for="fuel of fuels" :key="fuel" class="">{{fuel}}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <input class="selectric-input" tabindex="0"></div>
                                            </div>
                                        </div>

                                        <div class="deType03" style="background: none;">
                                            <div class="type_le">
                                                <h5>추천 직영점 <span class="icon_must">*</span></h5>
                                                <div id="region"  class="selectric-wrapper selectric-selectric selectric-below selectric-hover" @click= "searchKeyClick(`region`)">
                                                    <div class="selectric-hide-select"><select name="wr_gt_v_mfr_date"  class="selectric" data-unit="년">
                                                        <option v-for="region of regions" :key="region" value="">{{region}}</option>
                                                    </select></div>
                                                    <div class="selectric"><span class="label" >{{recommend.centerRegion}}</span></div>
                                                    <div class="selectric-items" tabindex="-1">
                                                        <div class="selectric-scroll" style="width: 230px; visibility: visible; display: block;">
                                                            <ul>
                                                                <li @click="selectRegion(region)" v-for="region of regions" :key="region" class="">{{region}}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <input class="selectric-input" tabindex="0"></div>
                                            </div>

                                            <div class="type_ri">
                                                <div id="centernm"  class="selectric-wrapper selectric-selectric selectric-below selectric-hover" @click= "searchKeyClick(`centernm`)">
                                                    <div class="selectric-hide-select"><select name="wr_gt_v_mfr_date"  class="selectric" data-unit="년">
                                                        <option v-for="centerName of centerNames" :key="centerName" value="">{{centerName}}</option>

                                                    </select></div>
                                                    <div class="selectric"><span class="label" >{{recommend.centerName}}</span></div>
                                                    <div class="selectric-items" tabindex="-1">
                                                        <div class="selectric-scroll" style="width: 230px; visibility: visible; display: block;">
                                                            <ul>
                                                                <li @click="recommend.centerName=centerName" v-for="centerName of centerNames" :key="centerName">{{centerName}}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <input class="selectric-input" tabindex="0"></div>
                                            </div>
                                        </div>

                                        <div class="deType02">
                                            <div class="type_le">
                                                <h5>구입예산 <span class="icon_must">*</span></h5>
                                                <div id="minPrice"  class="selectric-wrapper selectric-selectric selectric-below selectric-hover" @click= "searchKeyClick(`minPrice`)">
                                                    <div class="selectric-hide-select"><select name="wr_gt_v_mfr_date"  class="selectric" data-unit="년">
                                                        <option v-for="price of minPrices"  :key="price" value="">{{price}}</option>
                                                    </select></div>
                                                    <div class="selectric"><span class="label" >{{recommend.minPrice|thousandFormatter}}</span></div>
                                                    <div class="selectric-items" tabindex="-1">
                                                        <div class="selectric-scroll" style="width: 230px; visibility: visible; display: block;">
                                                            <ul>
                                                                <li @click="selectMinPrice(price,index)" v-for="(price,index) of minPrices"  :key="price" class="">{{price|thousandFormatter}}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <input class="selectric-input" tabindex="0"></div>
                                            </div>
                                            <div class="type_ri">
                                                <div id="maxPrice"  class="selectric-wrapper selectric-selectric selectric-below selectric-hover" @click= "searchKeyClick(`maxPrice`)">
                                                    <div class="selectric-hide-select"><select name="wr_gt_v_mfr_date"  class="selectric" data-unit="년">
                                                        <option  v-for="price of maxPrices" :key="price" value="">{{price|thousandFormatter}}</option>

                                                    </select></div>
                                                    <div class="selectric"><span class="label" >{{recommend.maxPrice|thousandFormatter}}</span></div>
                                                    <div class="selectric-items" tabindex="-1">
                                                        <div class="selectric-scroll" style="width: 230px; visibility: visible; display: block;">
                                                            <ul>
                                                                <li @click="recommend.maxPrice=price" v-for="price of maxPrices" :key="price" class="selected">{{price|thousandFormatter}}</li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <input class="selectric-input" tabindex="0"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="helpAgr">


                            <div class="helpAgrBtn">
                                <a @click.prevent @click="sendRecommend" href="" class="agrBtnOk">신청완료</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>



        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                searchKeyWord : '',
                recommend:{ userId:'',makeNm : '제조사를 선택하세요', modelGrpNm : '모델을 선택하세요', modelNm : '세부모델을 선택하세요',
                    minBeginYear :'최소', maxBeginYear:'최대',minMilage:'최소',maxMilage:'최대',transmissioncdName:'변속기를 선택하세요',
                    fuleTypedName:'연료를 선택하세요',recCommentCd:'',centerRegion:'지역',centerName:'직영점',minPrice:'최소',
                    maxPrice:'최대',recoCode:0,auth:true,name:this.$store.state.user.user.name},
                minYears:[],
                maxYears:[],
                transmissions:['오토','수동'],
                fuels:['가솔린','디젤','LPG','가솔린+전기','가솔린+LPG','전기','LPG+전기'],
                minPrices:[],
                maxPrices:[],
                minMilages:[],
                maxMilages:[] ,
                regions:[],
                centerNames:[]

            }
        },
        methods : {

            searchKeyClick(searchKeyID){

                const searchKey = document.getElementById(searchKeyID)
                const cate2 = document.getElementById('category2')
                if(searchKey.className === "selectric-wrapper selectric-selectric selectric-below selectric-hover"){
                    for (let elementsByClassNameElement of document.getElementsByClassName("selectric-wrapper selectric-selectric selectric-below selectric-hover selectric-open selectric-focus")) {
                        elementsByClassNameElement.className = "selectric-wrapper selectric-selectric selectric-below selectric-hover"
                    }
                    searchKey.className = "selectric-wrapper selectric-selectric selectric-below selectric-hover selectric-open selectric-focus"
                }else{
                    searchKey.className = "selectric-wrapper selectric-selectric selectric-below selectric-hover"
                }
                if(this.$store.state.contents.category2.length>=10) {
                    cate2.style.width = "500px"
                    cate2.style.height = "300px"
                }{
                    cate2.style.width = ""
                    cate2.style.height = ""
                }
            },

            setCategory2(param){
                this.recommend.modelGrpNm = '모델을 선택하세요'
                this.recommend.modelNm = '세부모델을 선택하세요'
                this.recommend.makeNm = param.name
                this.resultCount = param.count

                this.$store.dispatch('contents/getCategory2',{'param':this.recommend.makeNm,'column':'MAKENM'})


            },
            setCategory3(keyWord2, resultCount){
                this.recommend.modelNm = '세부모델을 선택하세요'
                this.recommend.modelGrpNm  = keyWord2
                this.resultCount = resultCount

                this.$store.dispatch('contents/getCategory3',{'param':this.recommend.modelGrpNm,'column':'MODEL_GRP_NM'})

            },
            setKeyWord3(keyWord3, resultCount){
                this.recommend.modelNm = keyWord3
                this.resultCount = resultCount
            },


            sendRecommend(){
                this.recommend.userId=localStorage.getItem('userId')
                if(this.recommend.makeNm=='제조사를 선택하세요'|| this.resultCount.modelGrpNm == '모델을 선택하세요'||this.recommend.modelNm == '세부모델을 선택하세요' ||
                    this.recommend.minBeginYear =='최소'|| this.recommend.maxBeginYear=='최대'|| this.recommend.minMilage=='최소'||this.recommend.maxMilage=='최대'||
                    this.recommend.centerRegion=='지역'||this.recommend.centerName=='직영점'||this.recommend.minPrice=='최소'|| this.recommend.maxPrice=='최대'){
                    alert('필수값을 입력하세요')
                }else{
                    if(this.recommend.fuleTypedName=='연료를 선택하세요'){this.recommend.fuleTypedName=''}
                    if(this.recommend.transmissioncdName=='변속기를 선택하세요'){this.recommend.transmissioncdName=''}
                    axios
                        .post('/recommend/inputRecommend', this.recommend)
                        .catch(e=>{
                            alert('erorr'+e)
                        })
                    alert("신청이 완료되었습니다!!")
                    this.$router.push('/recommendHome')

                }



            },
            selectMinYear(year, i){
                this.recommend.minBeginYear=year
                this.maxYears=[]
                for(i;i<this.minYears.length;i++){
                    this.maxYears.push(this.minYears[i])
                }

            },
            selectMilage(milage,i){
                this.recommend.minMilage=milage
                this.maxMilages=[]
                for(i;i<this.minMilages.length;i++){
                    this.maxMilages.push(this.minMilages[i])
                }
            },
            selectMinPrice(price,i){
                this.recommend.minPrice=price
                this.maxPrice=[]
                for(i;i<this.minPrices.length;i++){
                    this.maxPrices.push(this.minPrices[i])
                }
            },
            selectRegion(region){
                this.recommend.centerName='직영점'
                this.recommend.centerRegion=region
                region = (region=='경기/인천')? '경기': region
                axios
                    .get(`http://localhost:8080/recommend/centerName/`+region)
                    .then((res)=>{
                        this.centerNames=res.data


                    })
                    .catch((e)=>{
                        alert('잘못된 요청입니다.'+e)
                    })
            }



        },
        filters : {
            thousandFormatter: function (value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        },

        created(){
            for(let i =0; i<18; i++){
                this.minYears.push(2003+i)
            }
            for(let i =0; i<10;i++){
                this.minMilages.push(10000*i)
            }
            for(let i =0; i<10;i++){
                this.minPrices.push(1000*i)
            }
            this.$store.dispatch('contents/getCategory1',{'param':'KOR','column':'CAR_TYPE'})
            axios
                .get(`http://localhost:8080/recommend/centerRigion`)
                .then((res)=>{
                    res.data.forEach(el=>{
                        this.regions.push(el)
                    })

                })
                .catch((e)=>{
                    alert('잘못된 요청입니다.'+e)
                })
        }

    }

</script>
<style scoped>
    .tabCont {
        width: 1180px;
    }

    .helpCar {
        padding: 150px 0px;
    }
    .mc_wide_searchbox{width:100%;background:#191b1a /*#F1F2F4 url( /resources/images/index/pc_index_visual_1112.jpg) top center no-repeat*/;opacity: 0.97;height:903px;position:relative;display:inline-block; z-index:1; margin-bottom:57px;}
    .mc_wide_searchbox .searchbg{width:100%;background:url( https://www.kcar.com/resources/images/index/search_bg.png) center no-repeat; opacity: 0.97; display:inline-block;}
    .mc_wide_searchbox .searchbg .mc_search{    margin: 0px auto 0 auto; }
    .mc_search .selectric-items .selectric-scroll {
        overflow-x: hidden;
        overflow-y: auto;
    }
    .helpAgrBtn{
        padding: 20px;
    }
</style>