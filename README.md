# ProfileBare Coding Interview

Our team is building a new react-native app for our clients that they can use to view information about their account on-file. Our product team has asked for an MVP with some basic features that allow users to see a bit of profile information. This MVP will be used to:

- Ensure the app can communicate with existing endpoints
- Allow the engineering team to establish a foundation for future features

This repo outlines the features that our product team requirements in the form of Jest tests. The test names show what we need to build, but the tests and features themselves are incomplete.

The app has 1 container that switches between 2 screens using a `setScreen` function passed as props:

```mermaid
	flowchart TD
	App --> ProfileScreen
	App --> PrescriptionScreen
```

## Profile Feature

The profile feature consists of a `ProfileScreen` that:

- Shows a user's first name and last name
- Shows a user's date of birth
- Shows a button that allows a user to go to the Prescription Screen

In `src/profile`, there is 1 passing test and 4 other failing tests.

Our job will be to complete the tests and build the code to ensure they’re passing.
