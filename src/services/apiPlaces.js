import axios from "../api/axios.js";

export const createPlace = async (values) => {
  const savedData = JSON.parse(localStorage.getItem("userData"));
  let token;
  if (savedData) {
    token = savedData.token;
  }

  const { data } = await axios.post("/api/places", values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const getPlacesByUserId = async (userId) => {
  const { data } = await axios.get(`/api/places/user/${userId}`);

  return data;
};

export const updatePlaceApi = async (values, placeId) => {
  const savedData = JSON.parse(localStorage.getItem("userData"));
  let token;
  if (savedData) {
    token = savedData.token;
  }

  const { data } = await axios.patch(`/api/places/${placeId}`, values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const deletePlaceApi = async (placeId) => {
  const savedData = JSON.parse(localStorage.getItem("userData"));
  let token;
  if (savedData) {
    token = savedData.token;
  }

  const { data } = await axios.delete(`/api/places/${placeId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
