import Login from './Login'

export default function createRoutes() {
    return {
        path: 'register',
        getComponents(location, cb) {
            cb(null, Login)
        },
    }
}
