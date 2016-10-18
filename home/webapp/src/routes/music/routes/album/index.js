if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes() {
    return {
        path: 'album',
        getComponents(location, cb) {
            System.import('./Album.jsx').then((Album) => {
                cb(null, Album.default)
            })
        },
    }
}
