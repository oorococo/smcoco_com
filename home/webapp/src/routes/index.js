import Root from './root.jsx'
import Home from './home'

import createIndexRoute from './index/routes'
import createPortalRoute from './portal/routes'
import createMusicRoute from './music/routes'

export default () => {
    const path = '/'
    return {
        path,
        component: Root,
        indexRoute: {
            component: Home,
        },
        getChildRoutes(location, cb) {
                cb(null, [
                    createIndexRoute(),
                    createPortalRoute(),
                    createMusicRoute(),
                ])
        },
    }
}
