import {createWebHistory , createRouter} from 'vue-router'

import VMain from '../views/VMain.vue'
import VTest from '../views/VTest.vue'
import VResult from '../views/VResult.vue'

const routes = [
  {
    path: '/',
    children: [
      {path: '', name: 'VMain', component: VMain},
      {path: '/test', name: 'VTest', component: VTest},
      {path: '/result', name: 'VResult', component: VResult},
    ]
  },
]

export const router = createRouter({
  history: createWebHistory (),
  routes,
})