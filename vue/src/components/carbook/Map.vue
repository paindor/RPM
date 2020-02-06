<template>

<div id="wrap">
	<vue-daum-map
			:appKey="appKey"
			:center.sync="center"
			:level.sync="level"
			:mapTypeId="mapTypeId"
			:libraries="libraries"
			style="width:500px;height:400px;"/>

	<div class="list">
		<strong>
			<span _ngcontent-wjl-c76="" class="search_title_text"><button><router-link to="/stationInfo">S-OIL 서울에너지</router-link></button></span>
			<div _ngcontent-wjl-c76="" class="search_text_box"><!---->
				<span _ngcontent-wjl-c76="" class="search_text category ng-star-inserted">S-OIL주유소</span><!---->
				<span _ngcontent-wjl-c76="" class="search_text phone ng-star-inserted">02-3390-4338</span><!---->
			</div>
			<div _ngcontent-wjl-c76="" class="search_text_box ng-star-inserted">
				<span _ngcontent-wjl-c76="" class="search_text address">서울특별시 성동구 천호대로 324</span>
			</div>
			<div _ngcontent-wjl-c76="" class="search_text_box ng-star-inserted"><!----><!---->
				<span _ngcontent-wjl-c76="" class="search_text oil ng-star-inserted">휘발유 
				<span _ngcontent-wjl-c76="" class="search_count">1,534원</span></span><!---->
				<span _ngcontent-wjl-c76="" class="search_text oil ng-star-inserted">경유 
				<span _ngcontent-wjl-c76="" class="search_count">1,354원</span></span><!----><!---->
			</div>
		</strong>
		<strong>
			<span _ngcontent-wjl-c76="" class="search_title_text"><button>gs</button></span>
			<div _ngcontent-wjl-c76="" class="search_text_box"><!---->
				<span _ngcontent-wjl-c76="" class="search_text category ng-star-inserted">gs주유소</span><!---->
				<span _ngcontent-wjl-c76="" class="search_text phone ng-star-inserted">전화번호</span><!---->
			</div>
			<div _ngcontent-wjl-c76="" class="search_text_box ng-star-inserted">
				<span _ngcontent-wjl-c76="" class="search_text address">주소</span>
			</div>
			<div _ngcontent-wjl-c76="" class="search_text_box ng-star-inserted"><!----><!---->
				<span _ngcontent-wjl-c76="" class="search_text oil ng-star-inserted">휘발유 
				<span _ngcontent-wjl-c76="" class="search_count">1,534원</span></span><!---->
				<span _ngcontent-wjl-c76="" class="search_text oil ng-star-inserted">경유 
				<span _ngcontent-wjl-c76="" class="search_count">1,354원</span></span><!----><!---->
			</div>
		</strong>
		<strong>
			<span _ngcontent-wjl-c76="" class="search_title_text"><button>gs</button></span>
			<div _ngcontent-wjl-c76="" class="search_text_box"><!---->
				<span _ngcontent-wjl-c76="" class="search_text category ng-star-inserted">gs주유소</span><!---->
				<span _ngcontent-wjl-c76="" class="search_text phone ng-star-inserted">전화번호</span><!---->
			</div>
			<div _ngcontent-wjl-c76="" class="search_text_box ng-star-inserted">
				<span _ngcontent-wjl-c76="" class="search_text address">주소</span>
			</div>
			<div _ngcontent-wjl-c76="" class="search_text_box ng-star-inserted"><!----><!---->
				<span _ngcontent-wjl-c76="" class="search_text oil ng-star-inserted">휘발유 
				<span _ngcontent-wjl-c76="" class="search_count">1,534원</span></span><!---->
				<span _ngcontent-wjl-c76="" class="search_text oil ng-star-inserted">경유 
				<span _ngcontent-wjl-c76="" class="search_count">1,354원</span></span><!----><!---->
			</div>
		</strong>
		
	</div>
</div>

			
</template>
<script>

	import VueDaumMap from 'vue-daum-map'
	export default {
		data: () => ({
			appKey: '333b50bb1f33f2a368645364769dff1e', // 테스트용 appkey
			center: {lat:37.5524361 ,lng:126.9378684}, // 지도의 중심 좌표
			level: 3, // 지도의 레벨(확대, 축소 정도),
			mapTypeId: VueDaumMap.MapTypeId.NORMAL, // 맵 타입
			libraries: [], // 추가로 불러올 라이브러리
			map: null // 지도 객체. 지도가 로드되면 할당됨.
		}),
		components:{
			VueDaumMap
		},
		methods: {
			// 지도가 로드 완료되면 load 이벤트 발생
			onLoad () {
			}
		},

	}


</script>
<style scoped>
#wrap {
    min-width: 800px;
    width: 800px;
    margin:0 auto;
   
}
.list{
	user-select: none;
font-family: state,'Malgun Gothic','맑은 고딕',Dotum,'돋움',sans-serif;
cursor: pointer;
line-height: 19px;
color: #333;
font-size: 17px;
font-weight: 700;
letter-spacing: -.4px;
display: block;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
}



</style>