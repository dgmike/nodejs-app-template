import { Resource } from 'hal';

export const root = (ctx) => {
  const resource = new Resource({}, ctx.router.url('root'));
  ctx.hal(resource);
};
