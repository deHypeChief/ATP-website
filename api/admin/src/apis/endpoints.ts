import api from "@/lib/axios";

export const getUsers = async () => {
  const response = await api.get('/admin/getUsers');
  console.log(response.data.users)
  return response.data.users;
};


export const getTours = async () => {
    const response = await api.get('/tour/admin/getTournaments');
    console.log(response.data.tours)
    return response.data.tours;
  };