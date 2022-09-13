import { Prescription } from '../api';

export const MockPrescriptionsStub: Prescription[] = [
  {
    id: 1,
    dosage: '5 mg',
    instructions: 'Take once every week.',
    isActive: true,
    name: 'Fluoxetine',
    prescriberId: 1,
    quantity: 12,
    refillsRemaining: 2,
  },
  {
    id: 2,
    dosage: '2 mg',
    instructions: 'Take twice daily.',
    isActive: false,
    name: 'Diazepam',
    prescriberId: 1,
    quantity: 60,
    refillsRemaining: 0,
  },
  {
    id: 3,
    dosage: '0.25 mg',
    instructions: 'Twice a day with food',
    isActive: true,
    name: 'Clonazepam',
    prescriberId: 2,
    quantity: 60,
    refillsRemaining: 1,
  },
];
