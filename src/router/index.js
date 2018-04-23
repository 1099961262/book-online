import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/page/home/HomePage'
import Classify from '@/page/classify/Classify'
import Shopcart from '@/page/shopcart/Shopcart'
import Personal from '@/page/personal/Personal'
import BookDetail from '@/page/bookdetail/BookDetail'
import Login from '@/page/login/Login'
import Personaldata from '@/page/personaldata/Personaldata'
import Personaladdress from '@/page/personaladdress/Personaladdress'
import Pay from '@/page/shopcart/Pay'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/shopcart',
      name: 'Shopcart',
      component: Shopcart
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/bookdetail',
      name: 'BookDetail',
      component: BookDetail
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/personaldata',
      name: 'Personaldata',
      component: Personaldata
    },
    {
      path: '/pay',
      name: 'Pay',
      component: Pay
    },
    {
      path: '/personaladdress',
      name: 'Personaladdress',
      component: Personaladdress
    }
  ]
})
