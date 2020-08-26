/*
 * @Description: Description
 * @Author: Li Zhenxing
 * @Date: 2020-08-26 10:17:23
 * @LastEditors: Li Zhenxing
 * @LastEditTime: 2020-08-26 11:44:28
 */
import {createRouter,createWebHashHistory} from 'vue-router'

export default createRouter({
    history:createWebHashHistory(),
    routes:[{
        path:'/todolist',
        component:()=>import('../views/todo-list.vue')
    }]
})