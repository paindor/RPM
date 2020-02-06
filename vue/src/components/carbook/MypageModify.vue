<template>
	<div class="wrap">
		<div id="Rnewcontents">
			<h3 class="h3_tit" style="color:#313131; font-size: 1.05rem; padding: 2px" ><b>회원정보수정</b></h3>
			<div class="mypage_content" id="mypage_content">
				<div class="user_info">
					<table width="100%" class="t_user01">
						<colgroup>
							<col width="20%">
							<col width="*">
							<col width="12%">
							<col width="30%">
						</colgroup>
						<tbody><tr>
							<th>이름</th>
							<td colspan="3"><b>{{this.$store.state.user.user.name}}</b></td>
						</tr>
						<tr>
							<th>아이디</th>
							<td colspan="3"><b>{{this.$store.state.user.user.userid}}</b></td>
						</tr>
						<tr>
							<th><span class="org">* </span><label for="i_sPassWord">변경할 비밀번호입력</label> </th>
							<td colspan="3">
								<input type="password" v-model="passwd" id="i_sPassWord" maxlength="20" class="user_input02 am" value=""> &nbsp;&nbsp;&nbsp;
								<span>* 특수문자 제외. 영문 대/소문자, 숫자를 조합하여 8~20자로 입력해 주세요.</span>
							</td>
						</tr>
						<tr>
							<th><span class="org">*</span> <label for="i_sPassWord2">비밀번호 확인</label></th>
							<td colspan="3"><input type="password" v-model="passwd2" id="i_sPassWord2" maxlength="20" class="user_input02" value="">
								<b class="user_num_check mt5" v-if="1<passwd.length && passwd.length<8">{{passwdCheck}}</b>
								<b class="user_num_check mt5" v-show="passwd!=passwd2">{{passwdCheck2}}</b>
								<b class="user_num_check mt5" v-show="checkSpecial(passwd)">{{passwdCheck3}}</b>
							</td>
						</tr>
						<tr>
							<th><span class="org">*</span> 이메일 </th>
							<td colspan="3">
								<input type="text" v-model="email1" id="i_sEmail1" title="이메일 아이디" class="user_input05 am" value="">
								@
								<input type="text" v-model="email2" id="i_sEmail2" title="이메일 도메인" class="user_input05 am" placeholder="직접입력">
								<select v-model="email2" id="domain">
									<option value="직접입력">직접입력</option>
									<option value="daum.net">daum.net</option>
									<option value="naver.com">naver.com</option>
									<option value="nate.com">nate.com</option>
									<option value="dreamwiz.com">dreamwiz.com</option>
									<option value="empal.com">empal.com</option>
									<option value="freechal.com">freechal.com</option>
									<option value="gmail.com">gmail.com</option>
									<option value="hanafos.com">hanafos.com</option>
									<option value="hanmir.com">hanmir.com</option>
									<option value="hitel.net">hitel.net</option>
									<option value="hotmail.com">hotmail.com</option>
									<option value="korea.com">korea.com</option>
									<option value="lycos.co.kr">lycos.co.kr</option>
									<option value="netian.com">netian.com</option>
									<option value="paran.com">paran.com</option>
									<option value="yahoo.co.kr">yahoo.co.kr</option>
									<option value="chollian.net">chollian.net</option>
									<option value="hanmail.net">hanmail.net</option>
									<option value="kebi.com">kebi.com</option>
								</select>
							</td>
						</tr>
						</tbody></table>

				</div>
				<div class="user_info">
					<h4>추가 정보 입력 (선택)</h4>
					<table width="100%" class="t_user01">
						<colgroup>
							<col width="18%">
							<col width="*">
							<col width="13%">
							<col width="30%">
						</colgroup>
						<tbody><tr>
							<th>성별 </th>
							<td colspan="3" style="">
								<input type="radio" v-model="gender" id="man" value="man"> &nbsp;<label for="man">남성</label>
								<span class="pr30"></span>
								<input type="radio" v-model="gender" id="woman" value="woman"> &nbsp;<label for="woman">여성 </label>
							</td>
						</tr>
						<tr>
							<th>생년월</th>
							<td colspan="3">
								<input type="text" v-model="bYear" id="year" maxlength="4" class="user_input02 " value="" placeholder="예시) 1997" @keyup="yearCheck"> &nbsp;
								<span>년 </span>
								<span class="pr15"></span>
								<input type="text" v-model="bMonth" id="month" maxlength="2" class="user_input02 am" value="" placeholder="예시) 12" @keyup="monthCheck"> &nbsp;
								<span>월  </span>
								<b class="user_num_check mt5">{{bmsg}} {{bmmsg}}</b>
							</td>
						</tr>
						<tr>
							<th>지역 </th>
							<td colspan="3">
								<select style="width:130px" v-model="region" id="i_sUserRegion">
									<option value="">지역을 선택하세요  </option>
									<option value="서울">서울</option>
									<option value="인천">인천</option>
									<option value="대전">대전</option>
									<option value="대구">대구</option>
									<option value="광주">광주</option>
									<option value="부산">부산</option>
									<option value="울산">울산</option>
									<option value="세종">세종</option>
									<option value="경기">경기</option>
									<option value="강원">강원</option>
									<option value="경남">경남</option>
									<option value="경북">경북</option>
									<option value="전남">전남</option>
									<option value="전북">전북</option>
									<option value="충남">충남</option>
									<option value="충북">충북</option>
									<option value="제주">제주</option>
								</select>
							</td>
						</tr>

						</tbody></table>
					<div class="btn_formbts">
						<a @click.prevent="modify" class="btn_form_r"><b>정보수정</b></a>
						<a @click.prevent="modal" class="btn_form_g"><b>취소</b></a>
						<modals-container />
						<a class="btn_form_g btn_Leave" @click="withdrawal"><b>회원탈퇴</b></a>
					</div>

				</div>
			</div>

		</div>
	</div>
</template>
<script>
	import axios from "axios"
	import JoinModal from "../user/JoinModal"
	import WithdrawalModal from "./WithdrawlModal"
	export default {
		name: 'join',
		data(){
			return{context: 'http://localhost:8080',
				passwd:'',
				passwd2:'',
				passwdCheck:'비밀번호가 너무 짧습니다',
				passwdCheck2:'입력한 비밀번호가 다릅니다',
				passwdCheck3:'특수문자는 사용할 수 없습니다.',
				email1:'',
				email2:'',
				gender:'',
				bYear:'',
				bMonth:'',
				yearcheck:'',
				monthcheck:'',
				bmsg:'',
				bmmsg:'',
				region:''
			}
		},
		computed : {
			yeartrue(){
				if(this.bYear>1900 && this.bYear<2021){
					return true
				}else{
					return false
				}
			},
			monthtrue(){
				if(this.bMonth<13 && this.bMonth>0){
					return true
				}else{
					return false
				}
			},
			email(){
				if(this.email1!=''&&this.email2!=''){
					return this.email1+'@'+this.email2
				}else{
					return ''
				}
			},
			birthMonth(){
				let bM = ""
				if(this.bMonth<10){
					bM="0"+this.bMonth
				}else{
					bM=this.bMonth
				}
				if(this.yeartrue && this.monthtrue){
					return this.bYear+bM
				}else{
					return ''
				}
			}

		},
		methods : {
			checkSpecial(str) {
				let special_pattern = /[~!@#$%^&*()_+|<>?:{}]/gi
				if(special_pattern.test(str) == true) {
					return true;
				} else {
					return false;
				}
			},
			yearCheck(){
				if(this.yeartrue){
					this.bmsg = ''
				}else{
					this.bmsg ='생년을 확인해주세요'
				}
			},
			monthCheck(){
				if(this.monthtrue){
					this.bmmsg = ''
				}else{
					this.bmmsg ='생월을 확인해주세요'
				}
			},
			modify(){
				if(this.passwd==this.passwd2 &&
						this.email1!='' && this.email2!=''){
					let data = {
						userid : this.$store.state.user.user.userid,
						passwd : this.passwd,
						name : this.$store.state.user.user.name,
						email:this.email,
						gender:this.gender,
						birthMonth:this.birthMonth,
						region:this.region,
					}

					let headers = {
						'authorization': 'JWT fefege..',
						'Accept' : 'application/json',
						'Content-Type': 'application/json'
					}
					axios
							.post(`${this.context}/update`, data, headers)
							.then(res=>{
								if(res.data.msg=="success"){
									alert(`${res.data.user.name}님의 회원정보가 수정되었습니다. 다시 로그인해주세요.`)
									this.$store.dispatch('user/logout', {userid:this.$store.state.user.user.userid,passwd:this.$store.state.user.user.passwd})
									this.$router.push({path : '/login'})
								}
							})
							.catch(()=>{
								alert(`join axios Error`)
							})
				}else{
					alert(`필수 입력값을 확인해주세요.`)
				}
			},
			modal(){
				this.$modal.show(JoinModal,{
					modal: this.$modal},{
					name: 'dynamic-modal',
					height: 'auto',
					draggable: true,
				})
			},
			withdrawal(){
				this.$modal.show(WithdrawalModal,{
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
	.wrap{
		width:1050px;
		margin: 0 auto;
	}
	.btn_form_r b {
		display: inline-block;
		height: 20px;
		padding: 4px 16px 1px 17px;
		margin: 5px;
		background: #0d124f;
		border: 1px solid #bebebe;
		color: #fff;
	}
	.btn_form_g b {
		display: inline-block;
		height: 20px;
		padding: 4px 16px 1px 17px;
		background: #fff;
		border: 1px solid #bebebe;
	}
</style>