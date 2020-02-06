<template>

<div class="site-section bg-light" id="contact-section" style="background-color : white">
<link rel="stylesheet" href="http://colorlib.com/preview/theme/carrent/fonts/icomoon/style.css">
<link rel="stylesheet" href="http://colorlib.com/preview/theme/carrent/css/bootstrap.min.css">
<link rel="stylesheet" href="http://colorlib.com/preview/theme/carrent/css/bootstrap-datepicker.css">
<link rel="stylesheet" href="http://colorlib.com/preview/theme/carrent/css/jquery.fancybox.min.css">
<link rel="stylesheet" href="http://colorlib.com/preview/theme/carrent/css/owl.carousel.min.css">
<link rel="stylesheet" href="http://colorlib.com/preview/theme/carrent/css/owl.theme.default.min.css">
<link rel="stylesheet" href="http://colorlib.com/preview/theme/carrent/fonts/flaticon/font/flaticon.css">
<link rel="stylesheet" href="http://colorlib.com/preview/theme/carrent/css/aos.css">
<link rel="stylesheet" href="http://colorlib.com/preview/theme/carrent/css/style.css">
    <div class="container" style="background-color : white">
        <div class="row justify-content-center text-center">
            <div class="col-7 text-center mb-5">
                <h2>차량수정</h2>
                    
            </div>
        </div>
    <div class="row">
        <div class="col-lg-8 mb-5">
            <form action="#" method="post">
                <div class="form-group row">
                    <div class="col-md-6 mb-4 mb-lg-0">
                        <h6>제조사 </h6>
                        <select id="makeList"
                                title="제조사를 선택하세요"
                                class="selectric"
                                data-beusable-tracking=""
                                tabindex="-1"
                                v-for="category of this.$store.state.contents.category1"
                                :key="category.name">
                            <option data-type="MAKE_TYPE010"
                                    data-cnt="category.count">{{category.name}}</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <h6>모델명 </h6>
                        <select class="form-control" >
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""> </option>
                        </select>
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-md-6">
                        <h6>연식 </h6>
                        <input type="date" class="form-control" >
                    </div>
                     <div class="col-md-6">
                        <h6>주행거리 </h6>
                        <input type="text" class="form-control" >
                    </div>
                </div>
                <div class="form-group row">
                   <div class="col-md-6">
                        <h6>정비날짜 </h6>
                        <input type="date" class="form-control" >
                    </div>
                    <div class="col-md-6">
                        <h6>주유 날짜 </h6>
                        <input type="date" class="form-control" >
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-md-6 mr-auto">
                        <input type="submit" style="background-color: red" class="btn btn-block btn-primary text-white py-3 px-5" value="수정완료">
                    </div>
                </div>
            </form>
        </div>
        <div class="col-lg-4 ml-auto">
            <div class="bg-white p-3 p-md-5">
               <img class="img-fluid" src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/01-thumbnail.jpg" alt="">
                <input type="button" value="사진업로드 " />
            </div>
        </div>
        </div>
    </div>
</div>
</template>
<script>

</script>
<style scoped>

</style>