if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes() {
    return {
        path: 'login',
        getComponents(location, cb) {
            System.import('./Login.jsx').then((Login) => {
                cb(null, Login.default)
            })
        },
    }
}

