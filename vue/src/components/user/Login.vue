<template>
	<div>
		<link rel="stylesheet" type="text/css"   href="css/re_user.css">
		<link rel="stylesheet" type="text/css"   href="css/re_default.css">
		<div class="loginPage">
			<div class="loginBox">
				<p v-if="this.fail" id="" class="">회원아이디 또는 비밀번호가 일치하지 않습니다.</p>
				<p id="txt2" class="txtt none">비밀번호 오류가 5회 초과했습니다</p>
				<div class="login">
					<div class="loginForm">
						<h3><img src="https://www.kcar.com/resources/images/common/loginTit.gif" alt="로그인"></h3>
						<div class="idBox">
							<label for="input_id" class="loginLabel"><img src="https://www.kcar.com/resources/images/common/login_id.gif" alt="아이디" class="am"></label>
							<input  @keyup.enter="checkSubmit" v-model="userid"  type="text" name="i_sMemberId" class="input_id am" id="input_id" value="">&nbsp;&nbsp;
						</div>
						<div class="paddBox">
							<label for="passwd" class="loginLabel"><img src="https://www.kcar.com/resources/images/common/login_pass.gif" alt="패스워드" class="am"></label>

							<input @keyup.enter="checkSubmit" v-model="passwd" type="password" name="i_sPassWord" class="input_pass am" id="passwd" value="" maxlength="20">&nbsp;&nbsp;
							<span class="idSave">
						<input type="checkbox" class="am" id="id_save" name="id_save" value="Y">
						<label for="id_save" class="id_save">아이디 저장</label>
					</span>
							<a @click.prevent="checkSubmit" href=""><img src="https://www.kcar.com/resources/images/common/loginBtn.gif" alt="로그인" class="am"></a>
						</div>


						<p class="skjoin">아직 RPM 회원이 아니세요? <router-link to="/join">회원가입</router-link></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import {mapState} from 'vuex'
	export default {
		computed:{
			...mapState(
					{fail:state=>state.user.fail,
						auth : state=>state.user.auth}
			),
		},
		data(){
			return{
				userid : '',
				passwd : '',
				result :''

			}
		},
		methods:{
			moveToPasswd(){
				document.getElementById('passwd').focus()
			},
			checkSubmit(){
				this.login()
			},
			login(){
				this.$store.dispatch('user/login', { userid : this.userid , passwd : this.passwd })
			},
		},
		beforeDestroy(){
			this.$store.state.user.fail = false
		},

		created() {
			if(this.auth=== true){
				alert('이미로그인중입니다')
				this.$router.push('/')
			}
		}
	}
</script>
<style scoped>
	input[type=text] {
		width: 200px;
		height: 33px;
		padding: 2px 0 0 4px;
		border: 1px solid #bebebe;
	}
</style>