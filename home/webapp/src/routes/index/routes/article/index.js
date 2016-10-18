if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes() {
    return {
        path: 'article',
        getComponents(location, cb) {
            System.import('./Article.jsx').then((Article) => {
                cb(null, Article.default)
            })
        },
    }
}
