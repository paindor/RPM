<template>
	<div class="wrap">
		<div id="Rnewcontents">
			<div class="layer_edit" id="layer_edit">
				<div class="editnew">
					<div class="login_user">
						<h3><img src="https://www.kcar.com/resources/images/common/pass_input.gif" alt="비밀번호입력"></h3>
						<div class="id_pass_bx">
							<div class="id_pass">
								<strong><label for="input_id"><img
										src="https://www.kcar.com/resources/images/common/login_id.gif"
										alt="아이디"></label></strong>
								<p id="input_id">{{this.$store.state.user.user.userid}}</p>
							</div>
							<div class="id_pass">
								<strong><label for="loginPass"><img
										src="https://www.kcar.com/resources/images/common/login_pass.gif"
										alt="패스워드"></label></strong>
								<p><input type="password" id="loginPass" class="input_pass" v-model="password"
									maxlength="20" @keyup.enter="check"></p>
							</div>
						</div>
						<div class="login_bt">
							<a class="btn_form_r" @click="check"><b>확인</b></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				password: ''
			}
		},
		methods: {
			check() {
				if (this.password === '') {
					alert('비밀번호를 입력해주세요.')
				} else if (this.password !== this.$store.state.user.user.passwd) {
					alert('비밀번호를 확인해주세요.')
				} else if (this.password === this.$store.state.user.user.passwd) {
					this.$router.push("/mypagemodify")
				}
			}
		}
	}

</script>
<style scoped>
	.login_user .input_pass {
		width: 145px;
		height: 19px;
		border: 1px solid #0d124f;
		padding: 6px 0 0 2px;
		background: #fff;
	}

	.btn_form_r b {
		display: inline-block;
		height: 20px;
		padding: 4px 16px 1px 17px;
		background: #0d124f;
		border: 1px solid #0d124f;
		color: #fff;
	}
</style>