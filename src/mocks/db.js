import { factory, primaryKey } from '@mswjs/data';
import faker from 'faker';

const sex = ['Male', 'Female'];
const note = ['Too fat', 'Too skinny'];
const getRandomValue = (array, index) => array[index];

export const db = factory({
  patient: {
    id: primaryKey(() => faker.datatype.number({ min: 111655094926240, max: 163655094926240 })),
    name: () => faker.fake('{{name.firstName}}'),
    surname: () => faker.fake('{{name.lastName}}'),
    age: () => `${faker.datatype.number({ min: 20, max: 70 })}`,
    sex: () => getRandomValue(sex, faker.datatype.number({ min: 0, max: 1 })),
    email: () => faker.fake('{{internet.email}}'),
    telephone: () => `${faker.datatype.number({ min: 100000000, max: 999999999 })}`,
    bodymass: () => `${faker.datatype.number({ min: 50, max: 110 })}`,
    height: () => `${faker.datatype.number({ min: 160, max: 200 })}`,
    notes: () => getRandomValue(note, faker.datatype.number({ min: 0, max: 1 })),
    activity: () => `${faker.datatype.number({ min: 1.2, max: 2.4, precision: 0.1 })}`,
  },
  dietitian: {
    id: primaryKey(() => '1'),
    name: () => 'Jacek Placek',
    login: () => 'jacek123',
    password: () => '12345',
  },
});
