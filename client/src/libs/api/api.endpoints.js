import api from "./axios.config";

export const login = async (payload) => {
  const response = await api.post("/signUser", payload);
  return response;
};

export const register = async (payload) => {
  const response = await api.post("/createUser", payload);
  return response.data;
};

export const getTour = async () => {
  try {
    const response = await api.get("/tour/admin/getTournaments");
    return response.data.tours.reverse(); // Return only the tours array if that is the relevant data
  } catch (error) {
    console.error("Error fetching tournaments:", error);
    return []; // Return empty array or handle the error gracefully
  }
};

export const createMatchTicket = async (payload) => {
  try {
    const response = await api.post("/match/matchCallack", payload);
    return response.data;
  } catch (error) {
    console.error("Error fetching tournaments:", error);
    return [];
  }
};

export const checkMatch = async (payload) => {
  const response = await api.post("/match/matchCheck", payload);
  return response.data;
};

export const verify = async (payload) => {
  const response = await api.post('/verify', payload);
  return response.data;
}


export const getMatches = async ()=>{
  try{
    const response = await api.get('/match/getUserMatches')
    return response.data;
  }catch (error) {
    console.error("Error fetching Matches:", error);
    return [];
  }
}


export const getNotify = async ()=>{
  try{
    const response = await api.get('/notifications')
    console.log(response.data.notifications.reverse());
    return response.data.notifications.reverse();
  }catch (error) {
    console.error("Error fetching notify:", error);
    return [];
  }
}