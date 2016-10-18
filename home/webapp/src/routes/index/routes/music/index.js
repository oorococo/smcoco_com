export default function createRoutes() {
    return {
        path: 'music',
        getComponents(location, cb) {
            System.import('./Music').then((Music) => {
                cb(null, Music.default)
            })
        },
    }
}
