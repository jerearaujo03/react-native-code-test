const initialState = {
  currentUser: {},
};

export default (state = initialState, action) => {
  // eslint-disable-next-line no-unused-vars
  const {type, payload} = action;
  switch (type) {
    default:
      return state;
  }
};
