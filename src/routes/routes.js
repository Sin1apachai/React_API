import App from '../page/App'
import Home from '../page/Home'
import User from '../page/User'
import Album from '../page/Album'
import Photo from '../page/Photo'

const routes = [{
    path: '/',
    component: App,

    indexRoute: { component: Home },
    childRoutes: [
        { path: 'user', component: User },
        { path: 'album/:userID(/:title)', component: Album },
        { path: 'photo/:albumID(/:title)', component: Photo }
    ]
}]
export default routes