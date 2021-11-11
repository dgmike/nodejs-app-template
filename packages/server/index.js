import { debug } from 'util';
import Koa from 'koa';

const debugLog = debug('app:server');

export const createServer = async () => {
  debugLog('creating server');
  const app = new Koa();

  app.use((ctx) => {
    ctx.body = {
      ok: true,
    };
  });

  debugLog('server created');
  return app;
};
