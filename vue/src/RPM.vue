<template>
    <div id="main_grid">

        <div id="main_image" style="width: 100%; height: 100px; line-height: 100px; text-align: center">
            <img @click="goHome" style="width: 100%; max-width: 760px; vertical-align: middle" src="@/assets/image/rpmlogoblack.png" alt="">
        </div>
        <nav v-if="!this.$store.state.user.user.auth==1">
            <button v-if="!this.user.auth" class="navbar-toggler navbar-toggler-right"  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-start" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <div v-if="!this.auth">
                            <Slide noOverlay ableOutsideClick :crossIcon="false">
                                <router-link to="/">HOME</router-link>
                                <hr class="UserInfopartirion"/> <br/>
                                <UserInfo/>
                                <hr class="UserInfopartirion"/><br/>
                                <router-link to="/searchmain">검색</router-link>
                                <router-link to="/magazine">magazine </router-link>
                                <router-link to="/chartMaker">chartMaker </router-link>
                                <router-link to="/sns">SNS(REVIEW) </router-link>
                               <!-- <router-link to="/mapList">가까운 주유소 찾기 </router-link>-->

                            </Slide>
                        </div>
                        <div v-if="this.auth">
                            <Slide noOverlay ableOutsideClick :crossIcon="false">
                                <router-link to="/">HOME</router-link>
                                <hr class="UserInfopartirion"/> <br/>
                                <UserInfo/>
                                <hr class="UserInfopartirion"/><br/>
                                <router-link to="/searchmain">검색</router-link>
                                <router-link to="/recommendHome">딜러에게 추천받기</router-link>
                                <router-link to="/sns">SNS(REVIEW) </router-link>
                                <router-link to="/magazine">magazine </router-link>
                                <router-link to="/chartMaker">chartMaker </router-link>
                         <!--       <router-link to="/mapList">가까운 주유소 찾기 </router-link>-->
                            </Slide >
                        </div>
                    </li>
                </ul>

            </div>
        </nav>


        <div id = "main_layout">
            <div v-if="this.$store.state.user.user.auth==1" class="logout" >
                <a @click.prevent="logout">로그아웃</a>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>


<script>
    import {Slide} from 'vue-burger-menu'
    import {mapState} from 'vuex'
    import UserInfo from "./components/cmm/UserInfo.vue";


    export default {
        name: 'app',
        components: {
            UserInfo,
            Slide
        },

        computed:{
            ...mapState({
                auth: state=>state.user.auth,
                user: state=>state.user.user


            })
        },
        methods:{
            logout(){
                this.$store.dispatch('user/logout')
                this.$router.push('/')
                location.reload()
            },
            goHome(){
                (this.$store.state.user.user.auth==1)? this.$router.push('/companyHome'): this.$router.push('/')
            }
        }
    }
</script>
<style>

    .main_grid{
        display: grid;
        grid-template-rows: 5% 95%;
    }
    .bm-burger-button {
        position: relative !important;
        width: 36px;
        height: 36px;
        left: 36px;
        top: -100px;
        cursor: pointer;
    }
    .bm-burger-bars {
        background-color: #373a47;
    }
    .line-style {
        position: absolute;
        height: 20%;
        left: 0;
        right: 0;
    }
    .cross-style {
        position: absolute;
        top: 12px;
        right: 2px;
        cursor: pointer;
    }
    .bm-cross {
        background: #bdc3c7;
    }
    .bm-cross-button {
        height: 24px;
        width: 24px;
    }
    .bm-menu {
        height: 100%; /* 100% Full-height */
        width: 0; /* 0 width - change this with JavaScript */
        position: fixed; /* Stay in place */
        z-index: 1000; /* Stay on top */
        top: 0;
        left: 0;
        background-color: rgb(0, 31, 65); /* Black*/
        overflow-x: hidden; /* Disable horizontal scroll */
        /*padding-top: 60px; !* Place content 60px from the top *!*/
        font-family:"sans-serif";
        overflow-y : hidden;

    }

    .bm-menu a{
        color : #abb3bb;
        text-decoration:none !important;

    }
    .bm-menu a:hover{ color: #cccccc !important;}

    .bm-overlay {
        background: rgba(0, 0, 0, 0.3);
    }
    .bm-item-list {
        color: #b8b7ad;
        margin-left: 10%;
        font-size: 20px;
    }
    .bm-item-list > * {
        display: flex;
        text-decoration: none;
        padding: 0.7em;
    }
    .bm-item-list > * > span {
        margin-left: 10px;
        font-weight: 700;
        color: white;
    }

    .about{
        margin : 0px auto;
    }

    html, body {
        height : 100% !important;
    }

    #main_layout{
        padding-top: 50px;
    }

    #about{
        margin-top:50px;
    }
    .text-light{
        margin-top:50px;
    }
    nav {
        min-height: 5rem;
    }

    nav.fixed-top {
        padding: 0.5rem;
    }
    nav.bg-primary li a {
        color: #fff !important;
    }
    nav li a.active {
        padding: .2rem .4rem;
        color: #0275d8 !important;
        background-color: #fff;
        border-radius: .2rem;
        margin: .3rem 0.6rem;
    }
    nav .navbar-collapse.collapsing ul,
    nav .navbar-collapse.show ul {
        margin-top: 3rem;
    }
    nav .navbar-collapse.collapsing li a,
    nav .navbar-collapse.show li a  {
        padding: 0.5rem;
    }
    nav .navbar-collapse.show li a.active  {
        margin: 0;
    }
    .navbar-toggler {
        border: 0;
    }
    .bg-primary {
        color: #fff;
        background-color: black !important;
    }
    .container{
        margin: 0 200px;
    }
    .logout{
        padding-right: 300px;

        text-align: right;
        font-size: large;
        font-weight: bold;
        font-family: 'Malgun Gothic', '맑은 고딕', sans-serif;
    }

    .UserInfopartirion{
        border: 1px solid #0a4d81;
        width: 80%;
        float: left;
        padding: 0px;
    }
</style>