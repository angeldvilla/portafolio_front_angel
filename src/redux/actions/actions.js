import axios from "axios";
import { ENDPOINT, PROJECTS_URL, SKILLS_URL } from "./path";
import { GET_PROJECTS, GET_SKILLS } from "./actionTypes";

export const getProjects = () => {
  return async (dispatch) => {
    const projectsPath = `${ENDPOINT}${PROJECTS_URL}`;
    console.log(projectsPath);
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

export const getSkills = () => {
  return async (dispatch) => {
    const skillsPath = `${ENDPOINT}${SKILLS_URL}`;
    try {
      const { data } = await axios.get(skillsPath);
      return dispatch({
        type: GET_SKILLS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

