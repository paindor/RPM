<template>
    <div class="Usercontainer">
    <div class="wraper" v-if="this.auth">
        <div class="userInforArea" >
            <div class="profilePhotoArea">
                <img src="https://static.nid.naver.com/images/web/user/default.png" width="80" height="80" style="border-radius: 50%"  alt="">
            </div>
        <div class="nameSpace">{{this.user.name}} 님</div>
        <div v-if="this.mycar!=null" class="myCarSpace">내차: {{this.mycar.model}} </div>
        </div>
        <div class ='buttonArea'>
            <router-link to="/MypageModifyCheck">
                <a href="" class="mypageButton" > 회원정보 수정 </a>
            </router-link>
            <a href="" @click="logout" class="logoutButton">   로그아웃</a>
        </div>
        <hr/>
    </div>

    <div class="wraper" v-if="!this.auth">
        <div class="userInforArea" >
            <div class="profilePhotoArea">
                <img src="https://static.nid.naver.com/images/web/user/default.png" width="80" height="80" style="border-radius: 50%"  alt="">
            </div>
        <div class="nameSpace">Please<br/>Login</div>
        <div v-if="this.mycar!=null" class="myCarSpace"></div>
        </div>
        <div class ='buttonArea'>
            <router-link to="/join">
                <a href="" class="mypageButton" > 회원가입 </a>
            </router-link>
            <router-link to="/login">
                <a href="" class="logoutButton"> 로그인 </a>
            </router-link>
        </div>
        <hr/>
    </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {

        data() {
            return {
                name: '',

            }
        },
        computed: {
            ...mapState({
                user: state => state.user.user,
                auth: state => state.user.auth,
                mycar: state=> state.carbook.mycar
            })

        },
        methods: {
            logout() {
                this.$store.dispatch('user/logout')
                this.$router.push('/')
                location.reload()
            },



        }
    }
</script>

<style scoped>
.wraper{
    text-align: center;
    width: 100%;
    height: 180px;
    margin: 0 auto;
    color: white;
    float: left;
}
.mypageButton{
    width:49%; height: 36px; color: white; float:left;  font-size: 17px; text-align: center; padding-top: 13px;
}
.logoutButton{
    width:49.3%; height: 36px; color: white; float:right;font-size: 17px;  text-align: center; padding-top: 13px;
}
.buttonArea{
    width: 100%;
    height: 50px;
    float: bottom;
}
.buttonArea{
    width: 100%;
    height: 50px;
    float: bottom;;
    vertical-align: center;
}
.userInforArea{
    height: 100px;
}
.nameSpace{
    padding: 20px;
    width: 50%;
    height: 80px;
    float: right;
}
.myCarSpace{
    padding-top: 13px;
    height: 50px;
    width: 100%;
}
.profilePhotoArea{
    width: 20%;
    height: 80px;
    float: left;
    border-radius: 50px;
}

</style>