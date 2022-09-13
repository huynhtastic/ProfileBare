import axios from 'axios';

export interface Profile {
  id: number;
  firstName: string;
  lastName: string;
  preferredName: string;
  dateOfBirth: {
    month: number;
    day: number;
    year: number;
  };
  email: string;
}

const get = () => {
  return axios
    .get<Profile>('https://cerebral.com/not/a/real/endpoint/profile')
    .then(res => res.data);
};

export const ProfileAPI = {
  get,
};
