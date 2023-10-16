import axios from "axios";
import { ENDPOINT, PROJECTS_URL } from "./path";
import { GET_PROJECTS } from "./actionTypes";

export const getProjects = () => {
  return async (dispatch) => {
    const projectsPath = `${ENDPOINT}${PROJECTS_URL}`;
    try {
      const { data } = await axios.get(projectsPath);
      return dispatch({
        type: GET_PROJECTS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
