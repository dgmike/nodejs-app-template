import { debug } from 'util';
import Koa from 'koa';

const debugLog = debug('app:server');

export const createServer = async () => {
  debugLog('creating server');
  const app = new Koa();

  app.use((ctx, next) => {
    if (ctx.path !== '/' || ctx.method !== 'GET') {
      return next();
    }
    ctx.body = { ok: true };
  });

  debugLog('server created');

  app.mappedRoutes = () => {
    return app.middleware
      .map(middleware => middleware.router)
      .filter(Boolean)
      .map(router => router.stack)
      .flat()
      .map(stack => (stack.methods.length ? stack.methods : [null]).map(method => [method, stack.path]))
      .flat()
  };

  return app;
};
