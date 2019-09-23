import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home'
import BusinessOpportunity from '@/page/businessOpportunity'
import Client from '@/page/client'
import Contact from '@/page/contact'
import PotentialCustomers from '@/page/potentialCustomers'
import Task from '@/page/task'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },{
      path:'/Client',
      name: 'Client',
      component:Client,
    },{
      path:'/Task',
      name: 'Task',
      component:Task,
    },{
      path:'/PotentialCustomers',
      name: 'PotentialCustomers',
      component:PotentialCustomers,
    },{
      path:'/Contact',
      	name: 'Contact',
      	component:Contact,
    },{
      path:'/BusinessOpportunity',
      	name: 'BusinessOpportunity',
      	component:BusinessOpportunity,
    }
  ]
})
