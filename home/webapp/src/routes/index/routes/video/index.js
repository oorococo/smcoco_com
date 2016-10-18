if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes() {
    return {
        path: 'video',
        getComponents(location, cb) {
            System.import('./Video.jsx').then((Video) => {
                cb(null, Video.default)
            })
        },
    }
}
