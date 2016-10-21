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
