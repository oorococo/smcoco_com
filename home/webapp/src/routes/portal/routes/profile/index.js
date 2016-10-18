if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes() {
    return {
        path: 'profile',
        getComponents(location, cb) {
            System.import('./Profile.jsx').then((Profile) => {
                cb(null, Profile.default)
            })
        },
    }
}
