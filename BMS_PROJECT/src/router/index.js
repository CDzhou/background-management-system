import Vue from 'vue'
import Router from 'vue-router'

import Home from '../home.vue'
import Login from '../login.vue'
import Logout from '../logout.vue'
import NotFound from '../404.vue'
import Commodity_list from '../components/cdm/commodity_list.vue'
import Commodity_management from '../components/cdm/commodity_management.vue'
import Add_cmd from '../components/cdm/add_cmd.vue'
import Edit_cmd from '../components/cdm/edit_cmd.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/login',
        component: Login,
        name: '登陆',
        hidden: true
    },
    {
        path: '/logout',
        component: Logout,
        name: '登出',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '404',
        hidden: true
    },
    {
      path: '/',
      name: '商品模块',
      component: Home,
      children: [
            { path: '/1-1', component: Commodity_list, name: '商品列表' },
            { path: '/1-2', component: Commodity_management, name: '商品管理' },
            { path: '/1-3', component: Add_cmd, name: '新建商品',hidden:true},
            { path: '/1-4', component: Edit_cmd, name: '编辑商品',hidden:true }
        ]
    }
  ]
})
