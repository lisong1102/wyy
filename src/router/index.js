import WyDiscover from '@/pages/discover'
import WyFriend from '@/pages/friend'
import WyMine from '@/pages/mine'
import { Redirect } from 'react-router-dom'
import WyAlbum from '@/pages/discover/cPages/album'
import WyArtist from '@/pages/discover/cPages/artist'
import WyDjradio from '@/pages/discover/cPages/djradio'
import WyRanking from '@/pages/discover/cPages/ranking'
import WyRecommend from '@/pages/discover/cPages/recommend'
import WySongs from '@/pages/discover/cPages/songs'
const routes = [
    {
        path: '/',
        exact: true,
        render: () => (<Redirect to="/discover" />)
    },
    {
        path: "/discover",
        component: WyDiscover,
        routes:[{
            path:'/discover/album',
            component:WyAlbum
        },{
            path:'/discover/artist',
            component:WyArtist
        },{
            path:'/discover/djradio',
            component:WyDjradio
        },{
            path:'/discover/ranking',
            component:WyRanking
        },{
            path:'/discover/recommend',
            component:WyRecommend
        },{
            path:'/discover/songs',
            component:WySongs
        }]
    },
    {
        path: '/friend',
        component: WyFriend
    }, {
        path: '/mine',
        component: WyMine
    }]

export default routes