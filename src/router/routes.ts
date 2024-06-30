import DefaultLayout from '../layouts/DefaultLayout.vue'
export const constantRoute = [
  {
    path: '/',
    name: 'dashboard-layout',
    component: () => import('@/layouts/DashboardLayout.vue'),
    meta: {
      requiresAuth: true
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/HomeView.vue'),
        meta: {
          title: 'Home',
          icon: 'HomeFilled'
        }
      },
      {
        path: '/authentication',
        name: 'Authentication',
        meta: {
          title: 'Authentication',
          icon: 'Lock'
        },
        children: [
          {
            path: '/authentication/userManagement',
            name: 'UserManagement',
            component: () => import('@/views/UserManagement.vue'),
            meta: {
              title: 'User Management',
              icon: 'User'
            }
          },
          {
            path: '/authentication/roleManagement',
            name: 'RoleManagement',
            component: () => import('@/views/RoleManagement.vue'),
            meta: {
              title: 'Role Management',
              icon: 'UserFilled'
            }
          },
          {
            path: '/authentication/menuManagement',
            name: 'MenuManagement',
            component: () => import('@/views/MenuManagement.vue'),
            meta: {
              title: 'Menu Management',
              icon: 'Menu'
            }
          }
        ]
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import('@/views/ProductsView.vue'),
        meta: {
          title: 'Products',
          icon: 'TakeawayBox'
        }
      }
    ]
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue'),
    meta: {
      layout: DefaultLayout
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta: {
      layout: DefaultLayout
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home',
    name: 'Any'
  }
]
