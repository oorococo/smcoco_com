import Login from './Login'

export default function createRoutes() {
    return {
        path: 'login',
        getComponents(location, cb) {
            cb(null, Login)
        },
    }
}
