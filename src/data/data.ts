const patients = [
  {
    id: 163655094926240,
    name: 'Nathan',
    surname: 'Wood',
    age: '29',
    sex: 'Male',
    email: 'nathan@nathan.com',
    telephone: '983 634 821',
    bodymass: '84',
    height: '188',
    notes: 'Too fat',
    activity: '1.3'

  },
  {
    id: 16365516894567,
    name: 'Ffion',
    surname: 'Russell',
    age: '36',
    sex: 'Female',
    email: 'ffion@ffion.com',
    telephone: '834 683 460',
    bodymass: '60',
    height: '170',
    notes: 'Too skinny',
    activity: '2.1'

  },
  {
    id: 1636552953391,
    name: 'Kane',
    surname: 'Sandoval',
    age: '18',
    sex: 'Male',
    email: 'kane@kane.com',
    telephone: '531 361 765',
    bodymass: '96',
    height: '194',
    notes: 'Too fat',
    activity: '1.9'

  },
  {
    id: 1636551908165,
    name: 'Lara',
    surname: 'Hughes',
    age: '41',
    sex: 'Female',
    email: 'lara@lara.com',
    telephone: '734 643 233',
    bodymass: '71',
    height: '168',
    notes: 'Too skinny',
    activity: '1.6'
  },
];
export type PatientState = typeof patients[0]
export default patients;

export const InitialPatientValues = {
  id: 0,
  name: '',
  surname: '',
  age: '',
  sex: 'Male',
  email: '',
  telephone: '',
  bodymass: '',
  height: '',
  notes: '',
  activity: '1.2'
};