import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { Prescription, PrescriptionAPI } from './api';

export const PrescriptionScreen: React.FC<{
  setScreen: (screen: 'profile' | 'prescription') => void;
}> = ({ setScreen }) => {
  const [prescriptions, setPrescriptions] = useState<Prescription[]>();

  useEffect(() => {
    const getPrescriptions = async () => {
      const fetched = await PrescriptionAPI.get();
      setPrescriptions(fetched);
    };

    getPrescriptions();
  }, []);

  return (
    <View>
      <Text>You have {prescriptions?.length} prescriptions</Text>
      {prescriptions
        ?.filter(({ isActive }) => isActive === false)
        .map(({ name, instructions }) => {
          return (
            <Text>
              {name}: {instructions}
            </Text>
          );
        })}
      <Button title="My Profile" onPress={() => setScreen('profile')} />
    </View>
  );
};
