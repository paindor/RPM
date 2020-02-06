<template>
  <div class= "snsDetail">
    <link rel="stylesheet" href="https://startbootstrap.com/assets/style-theme.css">
    <link rel="stylesheet" href="https://blackrockdigital.github.io/startbootstrap-agency/css/agency.min.css">
    <link rel="stylesheet" href="https://blackrockdigital.github.io/startbootstrap-agency/vendor/fontawesome-free/css/all.min.css">

    <div class="portfolio-modal modal fade show" id="portfolioModal2" tabindex="-1" style="overflow: scroll; display: block; padding-right: 16.9962px;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" style="color:#0d124f" @click="gotoList" data-dismiss="modal">
            <i class="fas fa-undo fa-3x"></i>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2 class="text-uppercase">{{board.carName}}</h2>
                  <p class="item-intro text-muted">{{board.userName}}</p>
                  <img class="img-fluid d-block mx-auto" :src="board.boardImg" alt="">
                  <p>{{board.boardContent}}</p>
                  <ul class="list-inline">
                    <li>작성시간: {{board.boardDate}}</li>
                    <li>작성자: @{{board.userid}}</li>
                  </ul>
                  <!--thumb-->
                  <div style="margin:30px">
                    <a class="btn-like" @click="thumbUp" v-if="empty"><i class="far fa-heart fa-2x"></i> </a>
                    <a class="btn-like" @click="thumbDown" v-if="fall"><i class="fas fa-heart fa-2x"></i></a>
                    {{board.thumbCount}}
                  </div>
                  <div v-if="myContent">
                    <button class="btn btn-primary" @click="goModify" data-dismiss="modal" type="button">
                      <i class="fas fa-pen"></i> 글 수정하기</button>
                    <button class="btn btn-primary" @click="deleteBoard" data-dismiss="modal" type="button">
                      <i class="far fa-trash-alt"></i> 글 삭제하기</button>
                    <modals-container />
                  </div>
                  <div>
                    <!--댓글창-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from "axios"
  import SnsModal from "./SnsDeleteModal"
  let url = "http://localhost:8080"
  export default {
    data(){
      return{
        board:'',
        boardSeq: '',
        empty:true,
        fall:false,
        myContent:true
      }
    },
    created(){
      this.boardSeq = localStorage.getItem('storedData')
      axios.get(`${url}/loadBoard/${this.boardSeq}`)
              .then(res=>{
                this.board = res.data
                console.log(this.board)
                this.checkThumb()
                if(this.board.userid === this.$store.state.user.user.userid){
                  this.myContent = true
                }else{
                  this.myContent = false
                }
              })
              .catch(()=>{
                alert('axios error')
              })

      localStorage.setItem('boardSeq', this.boardSeq)
    },
    methods:{
      gotoList(){
        this.$router.push({path: '/sns'})
      },
      checkThumb(){
        axios.get(`${url}/thumbed/${this.boardSeq}/${this.$store.state.user.user.userid}`)
                .then((res)=>{
                  if(res.data){
                    this.empty=false
                    this.fall=true
                  }
                  else{
                    this.empty=true
                    this.fall=false
                  }
                })
                .catch(()=>{
                  alert('axios error')
                })
      },
      thumbUp(){
        if(this.$store.state.user.auth===false){
          alert('로그인 해주세요.')
        }else{
          this.empty=false
          this.fall=true
          axios.get(`${url}/thumbUp/${this.boardSeq}/${this.$store.state.user.user.userid}`)
                  .then(res=>{
                    if(res.data){
                      this.board.thumbCount +=1
                      console.log(this.board)
                    }
                  })
                  .catch(()=>{
                    alert('axios error')
                  })
        }
      },
      thumbDown(){
        this.empty=true
        this.fall=false
        axios.get(`${url}/thumbDown/${this.boardSeq}/${this.$store.state.user.user.userid}`)
                .then(res=>{
                  if(res.data){
                    this.board.thumbCount -=1
                    console.log(this.board)
                  }
                })
                .catch(()=>{
                  alert('axios error')
                })
      },
      goModify(){
        this.$router.push({path: '/snsmodify'})
      },
      deleteBoard(){
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
  .snsDetail {
  }
  .btn-primary {
    margin: auto 10px;
  }
  .fa-heart:before{
    color : #E81919;
  }
  h2 {
    color: #0d124f;
  }
</style>