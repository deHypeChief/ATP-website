import api from "./axios.config";

export const login = async (payload) => {
  const response = await api.post('/signUser', payload);
  return response;
};

export const register = async (payload) => {
  const response = await api.post('/createUser', payload);
  return response.data;
};


export const getTour = async () => {
  try {
    const response = await api.get("/tour/admin/getTournaments");
    console.log(response.data); // Log entire response for debugging
    return response.data.tours.reverse(); // Return only the tours array if that is the relevant data
  } catch (error) {
    console.error("Error fetching tournaments:", error);
    return []; // Return empty array or handle the error gracefully
  }
};