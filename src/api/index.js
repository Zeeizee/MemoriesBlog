// import axios from 'axios'

//  export const = async ()=>{
//     const URL="http://localhost:5000"
//      const {data}= await axios.get(`${URL}/posts`)
// return data;



// }


import axios from "axios";

const baseURL = "https://memories-be-henna.vercel.app";

export const fetchData = async () => {
  const data = await axios.get(`${baseURL}/posts`);
  return data;
};
export const newPost = async (post) => {
  const data = await axios.post(`${baseURL}/posts`,post);
  return data;
};
export const delPost = async (id) => {
  console.log(">>>>>>>>>>>>>>>>in api's>>>>>>>>>>>>>>>", id)
  const res = await axios.post(`${baseURL}/posts/deletepost`,id);
  return res;
};
export const updatePost= async (id,postData) => {
  console.log(">>>>>>>>>>>>>>>>in api's>>>>>>>>>>>>>>>", id)
  const res = await axios.patch(`${baseURL}/posts/updatepost/${id}`,postData);
  return res;
};
export const LikeCountPost= async (id) => {
  console.log(">>>>>>>>>>>>>>>>in api's>>>>>>>>>>>>>>>", id)
  const res = axios.patch(`${baseURL}/posts/likepost/${id}`)
  
  return res;
  
};

