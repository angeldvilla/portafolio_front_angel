import { GET_PROJECTS } from "../actions/actionTypes";

const initialState = {
  projects: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: payload,
      };
  }
};

export default rootReducer;
