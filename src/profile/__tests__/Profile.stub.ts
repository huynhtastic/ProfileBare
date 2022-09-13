import { Profile } from '../api';

export const ProfileStub: Profile = {
  id: 1,
  firstName: 'firstName',
  lastName: 'lastName',
  dateOfBirth: {
    day: 1,
    month: 1,
    year: 1990,
  },
  email: 'email@cerebral.com',
  preferredName: 'preferredName',
};
