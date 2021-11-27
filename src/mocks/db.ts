import { factory, primaryKey } from '@mswjs/data';
import faker from 'faker';

const sex = ['Male', 'Female'];
const note = ['Too fat', 'Too skinny'];
const products = ['soya', 'apple', 'strawberries', 'avocado', 'eggs', 'coffee', 'oats', 'fish', 'milk', 'rice'];
const getRandomValue = (array: any, index: any) => array[index];

export const db = factory({
  patient: {
    id: primaryKey(() => faker.datatype.number({ min: 1116550949262, max: 1636550949262 })),
    name: () => faker.fake('{{name.firstName}}'),
    surname: (): string => faker.fake('{{name.lastName}}'),
    age: (): string => `${faker.datatype.number({ min: 20, max: 70 })}`,
    sex: (): string => getRandomValue(sex, faker.datatype.number({ min: 0, max: 1 })),
    email: (): string => faker.fake('{{internet.email}}'),
    telephone: (): string => `${faker.datatype.number({ min: 100000000, max: 999999999 })}`,
    bodymass: (): string => `${faker.datatype.number({ min: 50, max: 110 })}`,
    height: (): string => `${faker.datatype.number({ min: 160, max: 200 })}`,
    notes: (): string => getRandomValue(note, faker.datatype.number({ min: 0, max: 1 })),
    activity: (): string => `${faker.datatype.number({ min: 1.2, max: 2.4, precision: 0.1 })}`,
    calories: (): string => '0',
    protein: (): string => '30',
    fat: (): string => '20',
    carbs: (): string => '50',
    allergens: (): string[] => [],
    preferences: (): string[] => [],
    diseases: (): string[] => [],
    // details: {
    //   energyTab: {
    //     street: String,
    //   },
    //   allergensTab: {
    //     alergens: String,
    //     preferences: String,
    //     diseases: ['a'],
    //   },
    //   testsTab: {
    //     street: String,
    //   },
    //   appointmentsTab: {
    //     street: String,
    //   },
    // },
  },
  dietitian: {
    id: primaryKey(() => '1'),
    name: () => 'Jacek Placek',
    login: () => 'jack123',
    password: () => 'Pass123',
  },
});
