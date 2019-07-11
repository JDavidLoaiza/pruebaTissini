import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Categorias from '@/components/Categorias'
import Catalogo from '@/components/Catalogo'
import Carrito from '@/components/Carrito'

Vue.use(Router)

/* router.beforeEach((to, from, next) => {
  let autentificado = localStorage.getItem('autenficado')
  let autorizacion = to.matched.some(record => record.meta.auth)
  console.log(typeof autentificado)
  console.log(typeof autorizacion)
  if (autentificado === autorizacion) {
    next('login')
  } else if (autentificado === !autorizacion) {
    next('principal')
  } else {
    next()
  }
}) */

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    /* {
      path: '/home',
      redirect: '/'
    }, */
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: Categorias
    },
    {
      path: '/catalogo/:id',
      name: 'catalogo',
      component: Catalogo
    },
    {
      path: '/carrito',
      name: 'carrito',
      component: Carrito
    }
  ]
})
