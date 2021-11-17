import { rest } from 'msw';
import patients from '../data/patients';

export const handlers = [
  rest.get('/dietmaster', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(patients));
  }),

  rest.post('/dietmaster', (req, res, ctx) => {
    const searchInList = patients.filter((patient) => {
      return patient.name.includes('a') || patient.surname.includes('a');
    });
    console.log(searchInList)
    return res(ctx.status(200), ctx.json(searchInList));
  }),

  rest.get('/dietmaster/patient/about/:id', (req, res, ctx) => {
    if (req.params.id) {
      const matchingPatient = patients.filter((patient) => patient.id === Number(req.params.id));
      return res(ctx.status(200), ctx.json(matchingPatient));
    }
  }),
  
  rest.post('/dietmaster/patient/about/:id', (req, res, ctx) => {
    const patient = req.body;

    return res(ctx.status(200), ctx.json(patient));
  }),
];
