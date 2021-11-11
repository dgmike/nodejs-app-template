import Koa from 'koa';

export const createServer = async () => {
  const app = new Koa();
  app.use((ctx) => {
    ctx.body = {
      ok: true,
    };
  })
  return app;
};
