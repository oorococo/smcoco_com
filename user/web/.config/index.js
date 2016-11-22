const config = {
  env: process.env.NODE_ENV || 'development',
}

config.globals = {
  'process.env': {
    'NODE_ENV': JSON.stringify(config.env),
  },
  'NODE_ENV': config.env,
  '__DEV__': config.env === 'development',
  '__PROD__': config.env === 'production',
  '__TEST__': config.env === 'test',
  '__DEBUG__': config.env === 'debug',
  '__PUBLIC_PATH__': JSON.stringify(process.env.PUBLIC_PATH || ''),
}
