import { setupWorker } from 'msw';
import { handlers } from './handlers';
import { db } from './db';

export const worker = setupWorker(...handlers);

db.patient.create()
db.patient.create()
db.patient.create()
db.patient.create()
db.patient.create()
db.patient.create()
db.dietitian.create()
