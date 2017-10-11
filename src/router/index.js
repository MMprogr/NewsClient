import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Article from '../components/Article.vue'

import { auth } from '../auth'

Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: Home,
		name: 'home'
	},
	{
		path: '/login',
		component: Login,
		name: 'login'
	},
	{
		path: '/article/:id',
		component: Article,
		name: 'Article'
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

router.beforeEach((to, from, next) => {
	if (auth.checkAuth()) {
		if (to.path === '/login') {
			router.replace(from.path)
		} else if (to.path === '/logout') {
			auth.logout()
			router.replace(from.path)
		} else {
			next()
		}
	} else {
		next()
	}
})

/*
 router.beforeEach((to, from, next) => {
 if (!auth.checkAuth()) {
 if (to.path !== '/login' && from.path !== '/login') {
 next({
 path: '/login',
 query: {
 redirect: to.fullPath
 }
 })
 } else {
 next()
 }
 } else {
 if (to.path !== '/login') {
 next()
 } else {
 router.replace(from.path)
 }
 }
 })
 */
export default router
