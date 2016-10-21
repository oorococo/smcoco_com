import Album from './Login'

export default function createRoutes() {
    return {
        path: 'album',
        getComponents(location, cb) {
            cb(null, Album)
        },
    }
}
