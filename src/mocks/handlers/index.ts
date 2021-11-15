import { rest } from 'msw';
import patients from '../data/patients';

export const handlers = [
  rest.get('/dietmaster', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(patients));
  }),
];
