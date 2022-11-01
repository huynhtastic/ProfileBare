import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { ProfileScreen } from '../ProfileScreen';
import { MockProfileStub } from '../__stubs__/Profile.stub';

const renderScreen = () => {
  // FIXME: Passed an empty fn to satisfy TS error
  return render(<ProfileScreen setScreen={() => {}} />);
};

describe('ProfileScreen', () => {
  it('should render without errors', () => {
    renderScreen();
  });

  describe('UI', () => {
    // FIXME: This is not passing
    it('should render firstName lastName concatenated', () => {
      const { getByText } = renderScreen();
      expect(
        getByText(`${MockProfileStub.firstName} ${MockProfileStub.lastName}`),
      ).not.toBeNull();
    });

    // FIXME: This is not passing
    it('should render dateOfBirth "month day, year" concatenated', () => {
      const { getByText } = renderScreen();
      const { day, month, year } = MockProfileStub.dateOfBirth;
      expect(getByText(`${month} ${day}, ${year}`)).not.toBeNull();
    });
  });

  describe('props', () => {
    describe('setScreen', () => {
      // FIXME: This is not passing
      it('should fire when the "My Prescriptions" button is pressed', () => {
        const { getByText } = renderScreen();
        fireEvent.press(getByText('My Prescriptions'));

        // TODO: Complete the test to expect that setScreen fired
        // expect()
      });

      // FIXME: This is not passing
      it('should fire with arg "prescription" when the "My Prescriptions" button is pressed', () => {
        const { getByText } = renderScreen();
        fireEvent.press(getByText('My Prescriptions'));

        // TODO: Complete the test to expect that setScreen received the arg "prescription"
        // expect()
      });
    });
  });
});
