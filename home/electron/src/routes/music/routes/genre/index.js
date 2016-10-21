import Genre from './Login'

export default function createRoutes() {
    return {
        path: 'genre',
        getComponents(location, cb) {
            cb(null, Genre)
        },
    }
}
