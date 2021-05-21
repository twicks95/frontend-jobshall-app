import axiosApiInstances from "../../utils/axios";

export const getWorkers = (page, limit, search, sort) => {
  return {
    type: "GET_WORKERS",
    payload: axiosApiInstances.get(
      `worker?search=${search}&sort=${sort}&page=${page}&limit=${limit}`
    ),
  };
};

export const getWorkerById = (id) => {
  return {
    type: "GET_WORKER_BY_ID",
    payload: axiosApiInstances.get(`worker/${id}`),
  };
};

export const updateWorkerData = (id, data) => {
  return {
    type: "UPDATE_WORKER_DATA_BY_ID",
    payload: axiosApiInstances.patch(`worker/${id}`, data),
  };
};

export const deleteWorkerData = (id) => {
  return {
    type: "DELETE_WORKER_BY_ID",
    payload: axiosApiInstances.delete(`worker/${id}`),
  };
};