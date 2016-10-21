import Root from './root.jsx'
import Home from './home'

import loginRoutes from './login'
import registerRoutes from './register'
import profileRoutes from './profile'

if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes() {
    return {
        path: 'i',
        component: Root,
        indexRoute: {
            component: Home,
        },
        getChildRoutes(location, cb) {
            cb(null, [
                loginRoutes(),
                registerRoutes(),
                profileRoutes(),
            ])
        },
    }
}
