export default function createRoutes() {
    return {
        path: 'genre',
        getComponents(location, cb) {
            System.import('./Genre.jsx').then((Genre) => {
                cb(null, Genre.default)
            })
        },
    }
}
