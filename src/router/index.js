import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Foo from '@/components/Foo'
import TodoMVC from '@/components/TodoMVC'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/foo',
      name: 'Foo',
      component: Foo
    },
    {
      path: '/todox',
      component: TodoMVC,
      redirect: '/todox/all'
    },
    {
      path: '/todox',
      component: TodoMVC,
      redirect: '/todox/:filter',
      props: true
    },
  ]
})
