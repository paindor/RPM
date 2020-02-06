<template>
    <div class= "snsDetail">
        <link rel="stylesheet" href="https://blackrockdigital.github.io/startbootstrap-agency/vendor/fontawesome-free/css/all.min.css">
        <link rel="shortcut icon" href="https://www.kcar.com/resources/images/common/favicon.ico" type="image/x-icon">
        <link rel="icon" href="https://www.kcar.com/resources/images/common/favicon.ico" type="image/x-icon">
        <link rel="apple-touch-icon-precomposed"
              href="https://www.kcar.com/resources/images/mobile/common/apple-touch-icon.png">
        <link rel="stylesheet" type="text/css"  href="css/re_import.css">
        <link rel="stylesheet" type="text/css"   href="css/re_trade.css">
        <link rel="stylesheet" type="text/css"   href="css/plugin/selectric.css">

        <div class="col-lg-9">
            <div class="card mt-4">
                <div class="dropbox" >
                    <img :src="board.boardImg" class="img-fluid">
                    <div style="width:300px; float:right">
                        <file-pond
                                ref="pond"
                                label-idle="변경할 사진 파일을 드래그 해주세요."
                                allow-multiple="false"
                                max-files="1"
                                accepted-file-types="image/jpeg, image/png"
                                :server="server"
                                :file="file"
                                @init="handleFilePondInit"
                                @removefile="handleRemoveFile"
                                @processfile="handleaddFile"/>
                        <p>*10Mb 이하의 파일을 업로드 해주세요.</p>
                    </div>

                </div>
                <div class="checkbox">
                    <h1 style="font-size:1.7em">모델명 선택하기</h1>
                    <div id="divTabWant1" class="divTabWantGroup">
                        <!--검색tab1 내용-->
                        <div class="searchcont1">
                            <ul>
                                <li>
                            <span id="spanMakeType" class="btnl">
                              <a @click="korCar(`korCar`,`impCar`)" id="korCar" class="on" data-item="MAKE_TYPE010">국산차</a>
                              <a @click="impCar(`korCar`,`impCar`,`category1`)" id="impCar" data-item="MAKE_TYPE020">수입차</a>
                            </span>
                                </li>
                                <li class="spreset">
                                    <div class="searchr1">
                                        <div id="searchKey1" @click="searchKeyClick(`searchKey1`)"
                                             class="selectric-wrapper selectric-selectric selectric-below selectric-hover">
                                            <div class="selectric-hide-select">
                                                <select id="makeList"
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
                                                                          data-beusable-tracking="" >{{keyWord1}}</span></div>
                                            <div id = "category1" class="selectric-items" tabindex="-1">
                                                <div class="selectric-scroll">
                                                    <ul v-for="category of this.$store.state.contents.category1" :key="category.name">
                                                        <li data-index="1" @click="setCategory2(category)" class="">{{category.name}}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <input class="selectric-input" tabindex="0"></div>
                                    </div>
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
                                                                         data-beusable-tracking="">{{keyWord2}}</span></div>
                                            <div id = "category2" class="selectric-items" tabindex="-1" >
                                                <div class="selectric-scroll">
                                                    <ul v-for="category of this.$store.state.contents.category2" :key="category.name">
                                                        <li data-index="1" @click="setCategory3(category)" class="">{{category.name}}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <input class="selectric-input" tabindex="0"></div>
                                    </div>
                                    <div class="searchr3">
                                        <div id="searchKey3" @click="searchKeyClick(`searchKey3`)"

                                             class="selectric-wrapper selectric-selectric selectric-below selectric-hover">
                                            <div class="selectric-hide-select">
                                                <select
                                                        id="modelList"
                                                        title="세부모델을 선택하세요"
                                                        class="selectric"
                                                        data-beusable-tracking=""
                                                        tabindex="-1"
                                                        v-for="category of this.$store.state.contents.category3"
                                                        :key="category.name">
                                                    <option data-type="MAKE_TYPE010"
                                                            data-cnt="category.count">{{category.name}}</option>
                                                </select></div>
                                            <div class="selectric"><span class="label"
                                                                         data-beusable-tracking="">{{keyWord3}}</span></div>
                                            <div class="selectric-items" tabindex="-1">
                                                <div class="selectric-scroll">
                                                    <ul v-for="category of this.$store.state.contents.category3" :key="category.name">
                                                        <li data-index="1" @click="setKeyWord3(category)" class="">{{category.name}}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <input class="selectric-input" tabindex="0"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="inputbox">
                    <p>{{contentTitle}}</p>
                    <br/>

                    <textarea class="card-text" v-model="board.boardContent"/>
                </div>
            </div>
            <div class="btnbox">
                <button class="btn btn-primary" @click="updateContent" data-dismiss="modal" type="button">
                    <i class="fas fa-pen"></i> <b>수정하기</b></button>
                <button class="btn btn-primary" @click.prevent="modal" data-dismiss="modal" type="button">
                    <i class="fas fa-times"></i> <b>취소하기</b></button>
                <modals-container />
            </div>
        </div>

    </div>
    <!--    </div>
      </div>
    </div>-->
</template>
<script>
    import SnsModal from "./SnsModifyModal.vue"
    import vueFilePond from 'vue-filepond';
    import 'filepond/dist/filepond.min.css';
    import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
    import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
    import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
    const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview);
    import axios from "axios"
    import { mapState } from 'vuex'
    let url = 'http://localhost:8080'


    export default{
        data(){
            return{
                boardSeq:'',
                board:'',
                server: {
                    url: `${url}/uploadImg`,
                    process: {
                        headers: {
                            Authorization: localStorage.getItem('token'),
                            'Access-Control-Allow-Methods': 'GET, OPTIONS, HEAD, PUT, POST'
                        }
                    }
                },
                file:[],
                uploadedFiles: [],
                defaultKeyWord1 : '제조사를 선택하세요',
                defaultKeyWord2 : '모델을 선택하세요',
                defaultKeyWord3 : '세부모델을 선택하세요',
                keyWord1 : '국산차/수입차를 먼저 선택하세요',
                keyWord2 : '',
                keyWord3 : '',
                contentTitle1 : '',
                contentTitle2 : '',
                contentTitle3 : '',
                userName:'',
                content:'',
            }
        },
        components: {
            FilePond
        },
        computed:{
            ...mapState({
                makerList: state => state.contents.makerList,
                modelList : state => state.contents.modelList,
                modelListIsOpen : state => state.contents.modelListIsOpen,
            }),
            contentTitle() {
                if (this.keyWord1 === '국산차/수입차를 먼저 선택하세요') {
                    return this.board.carName
                } else {
                    return this.contentTitle1 + ' ' + this.contentTitle2 + ' ' + this.contentTitle3
                }
            },
            boardImgName(){
                return (this.$refs.pond.getFile()===null)?this.board.boardImg:this.$refs.pond.getFile().filename
            }
        },
        created(){
            this.boardSeq = localStorage.getItem('boardSeq')//기존 board 내용 뿌려주기
            this.$store.dispatch('contents/init')
            this.$store.dispatch('contents/getCategory1',{'param':'KOR','column':'CAR_TYPE'})
            axios.get(`${url}/loadBoard/${this.boardSeq}`)
                .then(res=>{
                    this.board = res.data
                    console.log(this.board)
                })
                .catch(()=>{
                    alert('axios error')
                })
        },
        methods:{
            handleFilePondInit(){
                this.filename = ''
            },
            handleaddFile(){
                this.filename = this.$refs.pond.getFile().filename
            },
            handleRemoveFile(){
                this.filename = ''
            },
            korCar(korCarID, impCarID){
                const korCar = document.getElementById(korCarID)
                const impCar = document.getElementById(impCarID)
                korCar.className = "on"
                impCar.className = ""
                this.$store.dispatch('contents/getCategory1',{'param':'KOR','column':'CAR_TYPE'})
                this.keyWord1 = this.defaultKeyWord1
                this.keyWord2 = this.defaultKeyWord2
                this.keyWord3 = this.defaultKeyWord3
            },
            impCar(korCarID, impCarID, category1ID){
                const korCar = document.getElementById(korCarID)
                const impCar = document.getElementById(impCarID)
                const category1 = document.getElementById(category1ID)
                korCar.className = ""
                impCar.className = "on"
                category1.style.width = "220px"
                category1.style.height = "300px"
                this.$store.dispatch('contents/getCategory1',{'param':'IMP','column':'CAR_TYPE'})
                this.keyWord1 = this.defaultKeyWord1
                this.keyWord2 = this.defaultKeyWord2
                this.keyWord3 = this.defaultKeyWord3

            },
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
                    cate2.style.width = "220px"
                    cate2.style.height = "300px"
                }{
                    cate2.style.width = ""
                    cate2.style.height = ""
                }
            },

            setCategory2(param){
                this.keyWord2 = this.defaultKeyWord2
                this.keyWord3 = this.defaultKeyWord3
                this.keyWord1 = param.name
                this.contentTitle1 = this.keyWord1
                this.$store.dispatch('contents/getCategory2',{'param':this.keyWord1,'column':'MAKENM'})
            },
            setCategory3(param){
                this.keyWord3 = this.defaultKeyWord3
                this.keyWord2 = param.name
                this.contentTitle2 = this.keyWord2
                this.$store.dispatch('contents/getCategory3',{'param':this.keyWord2,'column':'MODEL_GRP_NM'})
            },
            setKeyWord3(param){
                this.keyWord3 = param.name
                this.contentTitle3 = this.keyWord3
            },
            updateContent() {
                let headers = {
                    'authorization': 'JWT fefege..',
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                }
                let data={
                    boardImgName: (this.$refs.pond.getFile()===null)?"oldImg":this.$refs.pond.getFile().filename,
                    carName : this.contentTitle,
                    boardContent : this.board.boardContent,
                    userid : this.$store.state.user.user.userid
                }

                axios.post(`${url}/updateContent/${this.boardSeq}`, data , headers)
                    .then((res)=>{
                        if(res.data){
                            alert('글이 수정되었습니다')
                            localStorage.setItem('boardSeq', this.boardSeq)
                            this.$router.push("/snsdetail")
                        }else{
                            alert('다시 시도해주세요')
                        }
                    })
                    .catch(()=>{
                        alert('axios error')
                    })
                // FilePond instance methods are available on `this.$refs.pond`
            },
            modal(){
                this.$modal.show(SnsModal,{
                    modal: this.$modal},{
                    name: 'dynamic-modal',
                    height: 'auto',
                    draggable: true,
                })
            }

        }

    }
</script>
<style scoped>

    .col-lg-9 {
        margin: 0 auto;
        -ms-flex: 0 0 75%;
        flex: 0 0 75%;
        max-width: 75%;
        position: relative;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        display: table;
    }
    .inputbox p {
        font-size: 2.5rem;
        position: relative;
        margin: 1rem;
        font-weight: 500;
        line-height: 1.2;
    }
    .mt-4 {
        margin-top: 1.5rem!important;
    }
    .card {
        position: relative;
        display: -ms-flexbox;
        display: flex;
        flex-flow: wrap;
        -ms-flex-direction: column;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: row;
        width: min-content;
        margin: 0 auto;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border-radius: .25rem;
    }
    .snsDetail {
        overflow: none;
    }
    .dropbox{
        width: 500px;
        height: 350px;
        position: relative;
        margin: 0 auto;
        float: left;
        text-align: center;
    }
    .checkbox {
        width: 350px;
        padding: 25px;
        height: 260px;
        float: left;
        border: 1px solid rgba(0,0,0,.125);
        border-radius: 10px 10px;
        margin-left:50px;
    }
    .inputbox{
        float: left;
        width: 1050px;
        margin: 0 auto;
        inline-size: auto;
    }
    .btnbox{
        margin: 50px auto;
        width: 1050px;
        text-align: center;
    }
    .dropbox > h3 {
        position: absolute;
        font-size: 2em;
        margin: 100px auto;
        padding-left: 40px;
        z-index: 2;
    }
    .img-fluid {
        max-width: 180px;
        height: 180px;
        inline-size: -webkit-fill-available;
        margin: 5px;
    }
    .inputbox textarea {
        resize: none;
        width: 950px;
        height: 300px;
        font-size: 17px;
        margin: 0 auto;
        padding: 10px;
        border-radius: 10px 10px;
        box-shadow: #0a0a0a;
    }
    .img-fluid d-block mx-auto{
        position: absolute;
        opacity: 0;
        width:100%;
        height:100%;
        top:0;
        left:0;
        z-index: 3;
    }
    .btn-primary {
        margin: auto 10px;
    }
    .portfolio-modal .modal-content p {
        margin-bottom: 30px;
    }
    .portfolio-modal .modal-content button {
        cursor: pointer;
    }
    @media (prefers-reduced-motion: reduce) {
        .btn {
            transition: none;
        }
    }
    .btn:hover {
        color: #212529;
        text-decoration: none;
    }
    .btn-primary {
        margin: auto 10px;
        height: 40px;
        width: 100px;
        border-radius: 10px 10px;
        font-size:1.2em;
        background-color: #212529;
        color: #fff;
    }
    .btn-primary:hover {
        color: #fff;
        background-color: #fac200;
    }



    .searchcont1 .btnl{margin: 10px;float:left; background:url(https://www.kcar.com/resources/images/index/bar.jpg) bottom right no-repeat;height:45px}
    .searchcont1 span.btnl a{text-align:center;width:75px;height:43px;display:inline-block;line-height:45px;border:1px #ddd solid;font-size:13px;color:#181819}
    .searchcont1 span.btnl a:hover, .searchcont1 .btnl a.on, .searchcont1 .btnl a.on:hover{background:#2d2d38;color:#fff}
    .searchcont1 .searchr1{position:absolute;top:131px;left:605px;width:300px}
    .searchcont1 .searchr2{position:absolute;top:181px;left:605px;width:300px}
    .searchcont1 .searchr3{position:absolute;top:231px;left:605px;width:300px}
    .searchcont1 .spreset ul{ width: 220px; }
    select{visibility:hidden;}
    .selectric-wrapper select{visibility:visible;}
    .searchcont1 .selectric { position:absolute; width: 100%; border:1px solid #ddd; background-color: #fff; }
    .selectric-items .selectric-scroll{overflow-x:hidden; overflow-y:auto;}
    .selectric-items .selectric-scroll li{padding-right:60px;position:relative}
    .selectric-items .selectric-scroll li em{position:absolute;top: 10px ;right:20px}
    .searchcont1 .selectric .label { width: 100%; height: 40px; line-height: 40px; color: #acacaf;}


</style>