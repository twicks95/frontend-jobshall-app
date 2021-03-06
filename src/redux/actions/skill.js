import axiosApiInstances from "../../utils/axios";

export const getSkills = (id) => {
  return {
    type: "GET_SKILLS",
    payload: axiosApiInstances.get(`skill/${id}`),
  };
};
export const getAllSkills = () => {
  return {
    type: "GET__ALL_SKILLS",
    payload: axiosApiInstances.get(`skill/`),
  };
};

export const createSkill = (skill) => {
  return {
    type: "CREATE_SKILL",
    payload: axiosApiInstances.post(`skill/`, skill),
  };
};

export const updateSkill = (id, skill) => {
  return {
    type: "UPDATE_SKILL",
    payload: axiosApiInstances.patch(`skill/${id}`, skill),
  };
};

export const deleteSkill = (id) => {
  return {
    type: "DELETE_SKILL",
    payload: axiosApiInstances.delete(`skill/${id}`),
  };
};
