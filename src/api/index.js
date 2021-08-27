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
  picture,
  gender,
  birthday,
  address,
}) => {
  return new Promise(async (resolve, reject) => {
    // simulate api call
    await timeout(1000);

    resolve({
      person: {
        id: uuidv4(),
        firstName,
        lastName,
        picture,
        gender,
        birthday,
        address,
      },
    });
  });
};
