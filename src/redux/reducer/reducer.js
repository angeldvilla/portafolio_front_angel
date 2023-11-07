import { GET_PROJECTS, GET_SKILLS } from "../actions/actionTypes";

const initialState = {
  projects: [],
  skills: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: payload,
      };

    case GET_SKILLS:
      return {
        ...state,
        skills: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
