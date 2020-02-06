import Vue from 'vue'
import Router from 'vue-router'
import SearchMain from '@/components/contents/SearchMain.vue'
import Home from '@/components/cmm/Home.vue'
import Join from '@/components/user/Join.vue'
import Login from '@/components/user/Login.vue'
import Product from '@/components/contents/Product.vue'
import Sale from '@/components/contents/Sale.vue'
import Magazine from '@/components/magazine/Magazine.vue'
import ChartMaker from '@/components/magazine/Datacenter.vue'
import Mypage from '@/components/carbook/MyPage.vue'
import MypageModify from '@/components/carbook/MypageModify.vue'
import MypageModifyCheck from '@/components/carbook/MypageModifyCheck.vue'
import SeenCar from '@/components/contents/SeenCar.vue'
import StationInfo from '@/components/carbook/StationInfo.vue'
import Condition from "@/components/recommend/Condition.vue"
import RecommendContent from "@/components/recommend/RecommendContent.vue"
import CarList from "@/components/company/CarList.vue"
import CompanyHome from "@/components/company/CompanyHome.vue"
import CustomerDetail from "@/components/company/CustomerDetail.vue"
import CustomerDetailRight from "@/components/company/CustomerDetail_right.vue"
import BestCarList from "@/components/company/BestCarList.vue"
import CompanyMain from "@/components/company/CompanyMain.vue"
import CustomerList from "@/components/company/CustomerList.vue"
import RecommendHome from "@/components/recommend/RecommendHome.vue"
import SnsPage from "@/components/social/SnsPage.vue"
import SnsDetail from "@/components/social/SnsDetail.vue"
import SnsModify from "@/components/social/SnsModify.vue"
import SnsWrite from "@/components/social/SnsWrite.vue"
import MycarModify from '@/components/carbook/MycarModify.vue'
import Payment from '@/components/contents/Payment.vue'
import Map from '@/components/carbook/Map.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base:process.env.BASE_URL,
    routes : [
        {path: '/searchmain', name: 'searchmain', component: SearchMain},
        {path: '/map', name: 'map', component: Map},
        {path:'/', name:'home', component : Home},
        {path:'/join', name:'join', component : Join},
        {path:'/login', name:'login', component : Login},
        {path:'/product', name:'product', component : Product},
        {path:'/mypage', name:'mypage', component : Mypage},
        {path:'/mypageModify', name:'mypageModify', component : MypageModify},
        {path:'/mycarModify', name:'mycarModify', component : MycarModify},
        {path:'/mypageModifyCheck', name:'mypageModifyCheck', component : MypageModifyCheck},
        {path:'/seencar', name:'seencar', component : SeenCar},
        {path:'/magazine', name:'magazine', component : Magazine},
        {path:'/chartMaker', name:'chartMaker', component : ChartMaker},
        {path:'/stationInfo', name:'stationInfo', component : StationInfo},
        {path:'/sale', name:'sale', component : Sale},
        {path:'/sns', name:'snspage', component : SnsPage},
        {path:'/snsdetail', name:'snsdetail', component : SnsDetail},
        {path:'/snsmodify', name:'snsmodify', component : SnsModify},
        {path:'/snswrite', name:'snswrite', component : SnsWrite},
        {path:'/payment', name:'payment', component : Payment},
        {path: '/customerDetail',name: 'customerDetail', component:CustomerDetail,children:
        [
            {path: '',name: 'customerDetailRight', component:CustomerDetailRight },
            {path: 'bestCarList',name: 'bestCarList', component:BestCarList }
        ]
        },
        {path: '/companyHome',name: 'companyHome', component:CompanyHome ,children:
                [
                    {path: '',name: 'companyMain', component:CompanyMain },
                    {path: 'customerList',name: 'CustomerList', component: CustomerList},
                    {path: 'carList',name: 'CarList', component: CarList}]},
        {path: '/recommendHome',name: 'recommendHome', component:RecommendHome, children:[
                {path: '',name: 'RecommendContent', component: RecommendContent},
                {path: 'condition',name: 'Condition', component: Condition}]}
    ]
})