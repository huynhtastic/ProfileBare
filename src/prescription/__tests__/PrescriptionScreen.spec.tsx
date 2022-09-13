/**
 * Copied from ../../profile/__tests__/ProfileScreen.spec.tsx
 */
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { PrescriptionScreen } from '../PrescriptionScreen';
import { MockPrescriptionsStub } from '../__stubs__/Prescriptions.stub';

jest.mock('../api.ts', () => {
  return {
    PrescriptionAPI: {
      get: async () => MockPrescriptionsStub,
    },
  };
});

const renderScreen = (setScreen = jest.fn()) => {
  return render(<PrescriptionScreen setScreen={setScreen} />);
};

describe('PrescriptionScreen', () => {
  it('should render without errors', () => {
    renderScreen();
  });

  describe('UI', () => {
    // FIXME: This is failing
    it('should render number of active presriptions', () => {
      const { getByText } = renderScreen();
      const numActivePrescriptions = MockPrescriptionsStub.filter(
        ({ isActive }) => isActive === true,
      ).length;

      // Text says: "You have {prescriptions.length} prescriptions"
      const actual = `You have ${numActivePrescriptions} prescriptions`;
      expect(getByText(actual)).not.toBeNull();
    });
  });

  describe('props', () => {
    describe('setScreen', () => {
      it('should fire when the "My Prescriptions" button is pressed', () => {
        const mockSetScreen = jest.fn();
        const { getByText } = renderScreen(mockSetScreen);
        fireEvent.press(getByText('My Profile'));

        expect(mockSetScreen).toHaveBeenCalledTimes(1);
      });

      // FIXME: This is failing
      it('should fire with arg "profile" when the "My Profile" button is pressed', () => {
        const mockSetScreen = jest.fn();
        const { getByText } = renderScreen(mockSetScreen);
        fireEvent.press(getByText('My Profile'));

        // TODO: Complete the test to expect that setScreen received the arg "prescription"
        expect(mockSetScreen).toHaveBeenCalledWith('prescription');
      });
    });
  });
});
