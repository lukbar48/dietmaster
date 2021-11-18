import { patients } from './patients';
import { auth } from './auth';

export const handlers = [...patients, ...auth];