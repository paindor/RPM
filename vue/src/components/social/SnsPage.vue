<template>
  <div class= "snsPage">
    <link rel="stylesheet" href="https://blackrockdigital.github.io/startbootstrap-agency/css/agency.min.css">
    <link rel="stylesheet" href="https://blackrockdigital.github.io/startbootstrap-agency/vendor/fontawesome-free/css/all.min.css">

    <section class="bg-light page-section" style="padding: 20px 0;" id="portfolio">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text- uppercase">INSTARPM</h2>
            <h3 class="section-subheading text-muted" style="margin:0"></h3>
          </div>
          <div class="btn-edit">
            <button class="btn btn-primary" @click="write" type="button">
              <i class="fas fa-edit"></i> 글쓰기</button>
          </div>
        </div>
        <div class="row-contents">

          <div v-for="(item, index) in boardList" :key="index" class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" href="/snsdetail" @click="goDetail(item.boardSeq)" active-class="active">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" :src="item.boardImg" alt="">
            </a>
            <div class="portfolio-caption">
              <h4>{{item.carName}}</h4>
              <p class="text-muted">{{item.userName}}</p>
              <div class="btn-like-comment">
                <a class="btn-like" v-if="thumbed(item.boardSeq)" style="color:#E81919"><i class="fas fa-heart"></i></a>
                <a class="btn-like" v-else><i class="far fa-heart"></i></a>
                {{item.thumbCount}}
              </div>
            </div>
          </div>
        </div>
        <div style="text-align: center;" class="btn-edit" >
          <button class="btn btn-primary"  v-if="hasMore" style="float:right" @click="loadData"><i class="fas fa-angle-down"></i></button>
          <h4 v-if="noMore">더이상의 게시물이 없습니다.</h4>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import axios from "axios"
  const url = "http://localhost:8080"
  export default {
    data() {
      return {
        loadedData:'',
        boardList:[],
        page: 1,
        hasMore:true,
        noMore: false,
        empty:true,
        fall:false,
        thumbedboard:[],
      }
    },
    created(){
      this.loadData()
    },
    computed: {
      thumbed(){
        return(b)=>{
          return this.thumbedboard.some(i=>i==b)
        }
      }
    },

    /* mounted(){
       this.scroll()
     },*/
    methods: {
      loadData(){
        let userid = (this.$store.state.user.auth===false)?"ghest":this.$store.state.user.user.userid
        axios
                .get(`${url}/viewList/${this.page}/${userid}`)
                .then(res => {
                  if (res.data.boardList.length) {
                    if(res.data.thumbedboard!=null){
                      this.thumbedboard.push(...res.data.thumbedboard)
                    }
                    this.boardList.push(...res.data.boardList)
                    if(res.data.length<12){
                      this.noMore = true
                      this.hasMore = false
                    }
                  } else {
                    this.noMore = true
                    this.hasMore = false
                  }
                })
                .catch(()=>{
                  alert('loadData axios error')
                })

        this.page += 1
      },
      /* scroll () {
         window.onscroll = () => {

           let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.scrollHeight+100
           if (bottomOfWindow) {
             this.scrolledToBottom = true
             alert('')
             this.loadData()
           }
         }
       },*/
      write() {
        this.$router.push({path: '/snswrite'})
      },
      goDetail(boardSeq){
        localStorage.setItem('storedData', boardSeq)
      }

    }
  }

</script>
<style scoped>
  body{
    overflow: visible;
  }
  .row-contents{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
  #portfolio .portfolio-item .portfolio-link .portfolio-hover {
    background: #0d124f78;
  }
  h2 {
    font-size: 14px;
    position: relative;
    color: #fac200;
  }

  .btn-primary {
    color: #fff;
    background-color: #010876 !important;
    border-color: #010876!important;
    margin: 30px;
  }
  .btn btn-primary:hover {
    color: #fff;
    background-color: #0d124f !important;
    border-color: #0d124f!important;
    margin: 30px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem;
  }

  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .img-fluid {
    max-width: 100%;
    height: 350px;
    inline-size: -webkit-fill-available;
  }

  kbd {
    padding: 0.2rem 0.4rem;
    font-size: 87.5%;
    color: #fff;
    background-color: #212529;
    border-radius: 0.2rem;
  }

  kbd kbd {
    padding: 0;
    font-size: 100%;
    font-weight: 700;
  }

  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }

  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }

  .no-gutters > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
  }

  .col-sm-6, .col-md-4, .col-lg-12 {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
  .col-sm-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-md-4 {
    -ms-flex: 0 0 30%;
    flex: 0 0 30%;
    max-width: 30%;
  }
  .col-lg-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
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

  .btn:focus, .btn.focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  .btn.disabled, .btn:disabled {
    opacity: 0.65;
  }

  a.btn.disabled,
  fieldset:disabled a.btn {
    pointer-events: none;
  }

  .btn-primary {
    color: #fff;
  }

  .btn-primary:hover {
    color: #fff;
  }

  .btn-primary.disabled, .btn-primary:disabled {
    color: #fff;
  }


  .btn-group-lg > .btn {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;
  }

  .btn-group-sm > .btn {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 0.2rem;
  }

  .btn-block + .btn-block {
    margin-top: 0.5rem;
  }

  .dropdown-toggle {
    white-space: nowrap;
  }

  .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }

  .dropdown-toggle:empty::after {
    margin-left: 0;
  }

  .dropup .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0;
    border-right: 0.3em solid transparent;
    border-bottom: 0.3em solid;
    border-left: 0.3em solid transparent;
  }

  .dropup .dropdown-toggle:empty::after {
    margin-left: 0;
  }

  .dropright .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid transparent;
    border-right: 0;
    border-bottom: 0.3em solid transparent;
    border-left: 0.3em solid;
  }

  .dropright .dropdown-toggle:empty::after {
    margin-left: 0;
  }

  .dropright .dropdown-toggle::after {
    vertical-align: 0;
  }

  .dropleft .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
  }

  .dropleft .dropdown-toggle::after {
    display: none;
  }

  .dropleft .dropdown-toggle::before {
    display: inline-block;
    margin-right: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid transparent;
    border-right: 0.3em solid;
    border-bottom: 0.3em solid transparent;
  }

  .dropleft .dropdown-toggle:empty::after {
    margin-left: 0;
  }

  .dropleft .dropdown-toggle::before {
    vertical-align: 0;
  }

  .btn-group > .btn,
  .btn-group-vertical > .btn {
    position: relative;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
  }

  .btn-group > .btn:hover,
  .btn-group-vertical > .btn:hover {
    z-index: 1;
  }


  .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,
  .btn-group-vertical > .btn:focus,
  .btn-group-vertical > .btn:active {
    z-index: 1;
  }


  .btn-group > .btn:not(:first-child) {
    margin-left: -1px;
  }

  .btn-group > .btn:not(:last-child):not(.dropdown-toggle),
  .btn-group > .btn-group:not(:last-child) > .btn {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .btn-group > .btn:not(:first-child),
  .btn-group > .btn-group:not(:first-child) > .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .btn-group-vertical > .btn  {
    width: 100%;
  }

  .btn-group-vertical > .btn:not(:first-child) {
    margin-top: -1px;
  }

  .btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),
  .btn-group-vertical > .btn-group:not(:last-child) > .btn {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .btn-group-vertical > .btn:not(:first-child),
  .btn-group-vertical > .btn-group:not(:first-child) > .btn {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .btn-group-toggle > .btn,
  .btn-group-toggle > .btn-group > .btn {
    margin-bottom: 0;
  }

  .btn-group-toggle > .btn input[type="radio"],
  .btn-group-toggle > .btn input[type="checkbox"],
  .btn-group-toggle > .btn-group > .btn input[type="radio"],
  .btn-group-toggle > .btn-group > .btn input[type="checkbox"] {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    pointer-events: none;
  }

  .input-group-prepend .btn,
  .input-group-append .btn {
    position: relative;
    z-index: 2;
  }

  .input-group-prepend .btn:focus,
  .input-group-append .btn:focus {
    z-index: 3;
  }

  .input-group-prepend .btn + .btn,
  .input-group-prepend .input-group-text + .btn,
  .input-group-append .btn + .btn,
  .input-group-append .input-group-text + .btn {
    margin-left: -1px;
  }

  .input-group-text input[type="radio"],
  .input-group-text input[type="checkbox"] {
    margin-top: 0;
  }
  .input-group-lg > .input-group-prepend > .btn,
  .input-group-lg > .input-group-append > .btn {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;
  }
  .input-group-sm > .input-group-prepend > .btn,
  .input-group-sm > .input-group-append > .btn {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 0.2rem;
  }

  .input-group > .input-group-prepend > .btn,
  .input-group > .input-group-append:not(:last-child) > .btn,
  .input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .input-group > .input-group-append > .btn,
  .input-group > .input-group-prepend:not(:first-child) > .btn,
  .input-group > .input-group-prepend:first-child > .btn:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .text-center {
    text-align: center !important;
  }

  @media print {
    *,
    *::before,
    *::after {
      text-shadow: none !important;
      box-shadow: none !important;
    }
    a:not(.btn) {
      text-decoration: underline;
    }
    abbr[title]::after {
      content: " (" attr(title) ")";
    }
    tr,
    img {
      page-break-inside: avoid;
    }
    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }
    h2,
    h3 {
      page-break-after: avoid;
    }
    @page {
      size: a3;
    }
    body {
      min-width: 992px !important;
    }
    .container {
      min-width: 992px !important;
    }
  }
  .btn-edit {
    margin-left: auto;
    margin-bottom: 20px;
  }
  .btn-like-comment a{
    margin: 5px;
    margin-top: 10px;
    color: rgba(33,37,41,.35);
    font-size: 15px;
  }
  .btn-primary{
    background-color: #fed136;
    border-color: #fed136;
  }
  .btn-like-comment a:hover {
    text-decoration: dashed;
  }

</style>