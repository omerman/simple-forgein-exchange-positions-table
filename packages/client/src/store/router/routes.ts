import { route } from 'client/src/config/router/route';

export const routes = Object.entries(route).map(([key, value]) => ({
  name: key,
  path: value.path,
}));
