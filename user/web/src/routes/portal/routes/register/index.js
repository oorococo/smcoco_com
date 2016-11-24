if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes() {
  return {
    path: 'register',
    getComponents(location, cb) {
      System.import('./Register.jsx').then((Register) => {
        cb(null, Register.default)
      })
    },
  }
}
