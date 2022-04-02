import WyDiscover from '@/pages/discover'
import WyFriend from '@/pages/friend'
import WyMine from '@/pages/mine'
const routes = [{
    path: '/',
    exact: true,
    component: WyDiscover
}, {
    path: "/discover",
    component: WyDiscover,
},
{
    path: '/friend',
    component: WyFriend
}, {
    path: '/mine',
    component: WyMine
}]

export default routes