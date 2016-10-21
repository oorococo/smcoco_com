import Root from './root.jsx'
import Home from './home'

import loginRoutes from './login'
import registerRoutes from './register'
import profileRoutes from './profile'

export default function createRoutes() {
    return {
        path: 'portal',
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
