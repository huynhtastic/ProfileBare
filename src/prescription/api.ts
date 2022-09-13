import axios from 'axios';

interface Prescription {
  id: number;
  name: string;
  /**
   * Comes in the format of '5 mg', '10 mg', '1 g', '10 ml', etc.
   */
  dosage: string;
  refillsRemaining: number;
  quantity: number;
  instructions: number;
  prescriberId: number;
}

const get = () => {
  return axios
    .get<Prescription[]>(
      'https://cerebral.com/not/a/real/endpoint/prescriptions',
    )
    .then(res => res.data);
};

export const Prescription = {
  get,
};
