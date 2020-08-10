import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/employees',
    name: 'Employees',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Employees.vue')
  },
  {
    path: '/employee/:name/:id',
    name: 'Employee',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Employee.vue')
  },
  {
    path: '/employee/new',
    name: 'CreateEmployeeForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateEmployeeForm.vue')
  },
  {
    path: '/department',
    name: 'Department',
    component: () => import(/* webpackChunkName: "about" */ '../views/Department.vue')
  },
  {
    path: '/department/create',
    name: 'CreateDepartmentForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateDepartmentForm.vue')
  },
  {
  path: '/payroll',
  name: 'Payroll',
  component: () => import(/* webpackChunkName: "about" */ '../views/Payroll.vue')
  },
  {
  path: '/payslip/create',
  name: 'CreatePayslip',
  component: () => import(/* webpackChunkName: "about" */ '../views/CreatePayslip.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
