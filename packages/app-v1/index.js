import Router from 'koa-routes';
import { Resource } from 'hal';

export const appV1 = new Router();

appV1.prefix('/api/v1');

appV1.use((ctx, next) => {
  ctx.hal = (resource) => {
    ctx.body = resource.toJSON();
    ctx.type = 'application/hal+json; chatset=utf-8';
  }
  next();
})

appV1.get('root', '/', (ctx) => {
  const resource = new Resource({}, appV1.url('root'));
  ctx.hal(resource);
});
