import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

const mockUser = {
  id: 38057,
  firstName: 'John',
  lastName: 'Smith',
};

const timeout = time => {
  return new Promise(resolve => setTimeout(resolve, time));
};

export const signIn = (username, password) => {
  return new Promise(async (resolve, reject) => {
    // simulate api call
    await timeout(1000);
    if (username === 'admin' && password === 'admin') {
      resolve({user: mockUser});
    }
    reject({error: 'Invalid username or password'});
  });
};

export const addPerson = ({
  firstName,
  lastName,
  image,
  gender,
  birth,
  address,
}) => {
  return new Promise(async (resolve, reject) => {
    // simulate api call
    await timeout(1000);

    try {
      const id = uuidv4();

      resolve({
        person: {
          id,
          firstName,
          lastName,
          image,
          gender,
          birth,
          address,
        },
      });
    } catch (e) {
      reject('An error has occurred');
      console.log(e);
    }
  });
};

export const updatePerson = ({
  id,
  firstName,
  lastName,
  image,
  gender,
  birth,
  address,
}) => {
  return new Promise(async (resolve, reject) => {
    // simulate api call
    await timeout(1000);

    try {
      resolve({
        person: {
          id,
          firstName,
          lastName,
          image,
          gender,
          birth,
          address,
        },
      });
    } catch (e) {
      reject('An error has occurred');
      console.log(e);
    }
  });
};
