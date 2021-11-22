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

  rest.post('/dietmaster/add', (req, res, ctx) => {
    const patient = req.body;
    db.patient.create(patient)
    return res(ctx.status(200), ctx.json(patient));
  }),
  rest.put('/dietmaster/add', (req, res, ctx) => {
    const updatedPatient = db.patient.update({
      // Query for the entity to modify.
      where: {
        id: {
          equals: req.body.id,
        },
      },
      // Provide partial next data to be
      // merged with the existing properties.
      data: {
        // Specify the exact next value.
        name: '',
        surname: '',
        age: '',
        sex: 'Male',
        email: '',
        telephone: '',
        bodymass: '',
        height: '',
        notes: '',
        activity: '1.2',
      },
    })
    console.log(updatedPatient)
    return res(ctx.status(200), ctx.json(updatedPatient));
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
