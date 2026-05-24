import { authHandlers } from './auth';
import { eventsHandlers } from './events';
import { venuesHandlers } from './venues';
import { usersHandlers } from './users';
import { tipsHandlers } from './tips';

export const handlers = [
  ...authHandlers,
  ...eventsHandlers,
  ...venuesHandlers,
  ...usersHandlers,
  ...tipsHandlers,
];
