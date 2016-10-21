import Login from './Login'

export default function createRoutes() {
    return {
        path: 'profile',
        getComponents(location, cb) {
            cb(null, Login)
        },
    }
}
