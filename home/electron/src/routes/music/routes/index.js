import Root from './root.jsx'
import Home from './home'

import genreRoutes from './genre'
import artistRoutes from './artist'
import album from './album'

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes() {
    return {
        path: 'music',
        component: Root,
        indexRoute: {
            component: Home,
        },
        getChildRoutes(location, cb) {
            require.ensure([], (require) => {
                cb(null, [
                    genreRoutes(),
                    artistRoutes(),
                    album(),
                ])
            })
        },
    }
}
