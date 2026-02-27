import Layout from '@/layout'

const aiRouter = {
  path: '/ai',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/ai/index'),
      name: 'ai',
      meta: { title: 'ai', icon: 'el-icon-chat-dot-round', roles: ['admin'] }
    }
  ]
}
export default aiRouter
