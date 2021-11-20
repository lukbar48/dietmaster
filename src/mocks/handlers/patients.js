import { rest } from 'msw';
// import patients from '../data/patientsList';
import { db } from 'mocks/db';

export const patients = [
  rest.get('/dietmaster', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(db.patient.getAll()));
  }),

  rest.post('/dietmaster', (req, res, ctx) => {
    const searchInList = db.patient.getAll().filter((patient) => {
      return patient.name.toLowerCase().includes(`${req.body}`) || patient.surname.toLowerCase().includes(`${req.body}`);
    });
    return res(ctx.status(200), ctx.json(searchInList));
  }),

  rest.get('/dietmaster/patient/about/:id', (req, res, ctx) => {
    if (req.params.id) {
      const matchingPatient = db.patient.getAll().filter((patient) => patient.id === Number(req.params.id));
      return res(ctx.status(200), ctx.json(matchingPatient));
    }
  }),

  rest.post('/dietmaster/patient/about/:id', (req, res, ctx) => {
    const patient = req.body;

    return res(ctx.status(200), ctx.json(patient));
  }),
  rest.put('/dietmaster/patient/about/:id', (req, res, ctx) => {
    console.log(req.body)

    return res(ctx.status(200), ctx.json(req.body));
  }),
  rest.delete('/dietmaster', (req, res, ctx) => {
    if (req.body) {
      const removedPatient = db.patient.delete({
        where: {
          id: {
            equals: req.body.id,
          },
        },
      });
      return res(
        ctx.status(200),
        ctx.json({
          removedPatient,
        }),
      );
    }
  }),
];
