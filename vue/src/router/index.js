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

const requireAuthCompany = () => (to, from, next) => {
    if (localStorage.getItem('auth') == 1) {
        return next();
    }
    next('/');
    alert('접근권한이 없습니다.')
};
const requireAuthUser = () => (to, from, next) => {
    if (localStorage.getItem('auth') == 0) {
        return next();
    }
    next('/');
    alert('접근권한이 없습니다.')
};





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
        {path:'/mypage',beforeEnter:requireAuthUser(), name:'mypage', component : Mypage},
        {path:'/mypageModify',beforeEnter:requireAuthUser(), name:'mypageModify', component : MypageModify},
        {path:'/mycarModify',beforeEnter:requireAuthUser(), name:'mycarModify', component : MycarModify},
        {path:'/mypageModifyCheck', beforeEnter:requireAuthUser(),name:'mypageModifyCheck', component : MypageModifyCheck},
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
        {path: '/customerDetail',beforeEnter: requireAuthCompany(), component:CustomerDetail,children:
        [
            {path: '',beforeEnter: requireAuthCompany(), component:CustomerDetailRight },
            {path: 'bestCarList',beforeEnter: requireAuthCompany(),name: 'bestCarList', component:BestCarList }
        ]
        },
        {path: '/companyHome',beforeEnter: requireAuthCompany(), component:CompanyHome ,children:
                [
                    {path: '',beforeEnter: requireAuthCompany(),name: 'companyMain', component:CompanyMain },
                    {path: 'customerList',beforeEnter: requireAuthCompany(),name: 'CustomerList', component: CustomerList},
                    {path: 'carList',beforeEnter: requireAuthCompany(),name: 'CarList', component: CarList}]},
        {path: '/recommendHome',beforeEnter: requireAuthCompany(), component:RecommendHome, children:[
                {path: '',beforeEnter: requireAuthCompany(),name: 'RecommendContent', component: RecommendContent},
                {path: 'condition',beforeEnter: requireAuthCompany(),name: 'Condition', component: Condition}]}
    ]
})