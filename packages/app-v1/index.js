import Router from 'koa-routes';
import * as handlers from './handlers/index.js'

export const appV1 = new Router();

appV1.prefix('/api/v1');

appV1.use((ctx, next) => {
  ctx.hal = (resource) => {
    ctx.body = resource.toJSON();
    ctx.type = 'application/hal+json; chatset=utf-8';
  }
  next();
})

appV1.get('root', '/', handlers.root);
