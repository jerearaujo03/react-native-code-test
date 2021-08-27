const mockUser = {
  id: 38057,
  firstName: 'John',
  lastName: 'Smith',
};

export const signIn = (username, password) => {
  return new Promise((resolve, reject) => {
    // simulate api call
    setTimeout(() => {
      if (username === 'admin' && password === 'admin') {
        resolve({user: mockUser});
      }
      reject({error: 'Invalid username or password'});
    }, 1000);
  });
};
