import { factory, primaryKey } from '@mswjs/data';
import faker from 'faker';

const sex = ['Male', 'Female'];
const note = ['Too fat', 'Too skinny'];
const products = ['soya', 'apple', 'strawberries', 'avocado', 'eggs', 'coffee', 'oats', 'fish', 'milk', 'rice', 'peanuts'];
const getRandomValue = (array: string[], index: number) => array[index];

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
    allergens: (): string[] => [getRandomValue(products, faker.datatype.number({ min: 0, max: 10 }))],
    preferences: (): string[] => [getRandomValue(products, faker.datatype.number({ min: 0, max: 10 }))],
    diseases: (): string[] => [],
    tests: (): any[] => [
      {
        date: '2021-11-26',
        type: 'Red blood cells',
        value: '75mg',
      },
      {
        date: '2021-11-26',
        type: 'Cholesterol',
        value: '420mg',
      },
      {
        date: '2021-11-26',
        type: 'Glucose',
        value: '102mg',
      },
    ],
    appointments: (): any[] => [
      {
        date: '2021-11-26',
        bodymass: '82',
        BMI: '28',
        hips: '113',
        waist: '98',
      },
      {
        date: '2021-11-26',
        bodymass: '80',
        BMI: '24',
        hips: '107',
        waist: '94',
      },
    ],
  },
  dietitian: {
    id: primaryKey(() => '1'),
    name: () => 'Jacek Placek',
    login: () => 'jack123',
    password: () => 'Pass123',
  },
});
