import axios from "axios";
import { AUTHEN } from '../Auth/index'
export const searchUsersInfo = async (query) => {
  try {
    const { data } = await axios.get(`http://society.sylitas.com/search`, {
      headers: {
        Authorization: AUTHEN
      },
      params: { query }
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}
export const getPost = async () => {
  try {
    const { data } = await axios.get(`http://society.sylitas.com/post`, {
      headers: {
        Authorization: AUTHEN
      },
    });
    return data;
  } catch (error) {
    console.log(error)
  }
}