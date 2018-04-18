import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/page/home/HomePage'
import Classify from '@/page/classify/Classify'
import Shopcart from '@/page/shopcart/Shopcart'
import Personal from '@/page/personal/Personal'
import BookDetail from '@/page/bookdetail/BookDetail'

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
    }
  ]
})
