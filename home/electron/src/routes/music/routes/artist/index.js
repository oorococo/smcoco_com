import Artist from './Login'

export default function createRoutes() {
    return {
        path: 'artist',
        getComponents(location, cb) {
            cb(null, Artist)
        },
    }
}
