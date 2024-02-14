import axios from "../api/axios.js";

export const createPlace = async (values) => {
  const { data } = await axios.post("/api/places", values);

  return data;
};

export const getPlacesByUserId = async (userId) => {
  const { data } = await axios.get(`/api/places/user/${userId}`);

  return data;
};

export const updatePlaceApi = async (values, placeId) => {
  const { data } = await axios.patch(`/api/places/${placeId}`, values);

  return data;
};

export const deletePlaceApi = async (placeId) => {
  const { data } = await axios.delete(`/api/places/${placeId}`);

  return data;
};
