





const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/pagesPrincipal.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout2.vue'),
    children: [
      { path: 'ventascelulares', component: () => import('pages/VentaCelulares.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout3.vue'),
    children: [
      { path: 'nuevoanuncio', component: () => import('pages/NuevoAnuncio.vue') },
    ]
  },



  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
