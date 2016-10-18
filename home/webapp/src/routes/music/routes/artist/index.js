if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes() {
    return {
        path: 'artist',
        getComponents(location, cb) {
            System.import('./Artist.jsx').then((Artist) => {
                cb(null, Artist.default)
            })
        },
    }
}
