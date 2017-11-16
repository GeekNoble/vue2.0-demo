import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IndexPage from '../pages/index'
import detail from '../pages/detail'
import DetailAna from '../pages/detail/analysis'
import DetailCou from '../pages/detail/count'
import DetailFor from '../pages/detail/forecast'
import DetailPub from '../pages/detail/publish'
import orderList from '..//pages/orderList'
Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
    	path:'/detail',
    	component:detail,
    	children:[
    		{
    			path:'analysis',
    			component:DetailAna
    		},
    		{
    			path:'count',
    			component:DetailCou
    		},
    		{
    			path:'forecast',
    			component:DetailFor
    		},
    		{
    			path:'publish',
    			component:DetailPub
    		}
    	]
    },
    {
        path:'/orderList',
        component:orderList
    }
  ]
})
