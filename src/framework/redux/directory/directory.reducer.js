import sections from './sections.const';

const INITIAL_STATE = { sections };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
};
