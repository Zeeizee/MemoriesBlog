import React from "react";
import * as API from '../api/index'

export const fetchAllPosts=()=> async (dispatch)=>{

    try {
        const {data}=await API.fetchData();
        dispatch({type:"FETCH_ALL_POSTS",payload:data});
    } catch (error) {
        console.log(error);
    }

}
export const createNewPost=(post)=> async (dispatch)=>{

    try {
        const {data}=await API.newPost(post);
        dispatch({type:"CREATE_NEW_POST",payload:data});      
    } catch (error) {
        console.log(error);
    }

}
export const deletePost=(postId)=> async (dispatch)=>{

 try{
    console.log("in Action creator===================>>>>>>>>>>>>>>>",postId)
    const resp=await API.delPost(postId);
    console.log("in action creators",postId)
    dispatch({type:"DELETE_POST",payload:postId});
   
 }
 catch(err){
     console.log(err)
 }
}
export const getUpdatePost=(postId)=> async (dispatch)=>{

 try{
    console.log("in Action creator get update post id===================>>>>>>>>>>>>>>>",postId)  
    dispatch({type:"GET_UPDATE_POST",payload:postId})
 }
 catch(err){
     console.log(err)
 }
}
export const updatePostAction=(postData)=> async (dispatch)=>{

 try{

    dispatch({type:"UPDATE_POST",payload:postData})    
    const {data}=await API.updatePost(postData.id,postData)    
    console.log("in action creator retturn",data)
    //dispatch({type:"UPDATE_POST",payload:data})
 }
 catch(err){
     console.log(err)
 }
}
export const clearPost=()=> async (dispatch)=>{

 try{

    dispatch({type:"CLEAR_POST",payload:""})    
    
    //dispatch({type:"UPDATE_POST",payload:data})
 }
 catch(err){
     console.log(err)
 }
}
export const likePost=(id)=> async (dispatch)=>{

 try{

    dispatch({type:"LIKE_POST",payload:id})    
    const {data}=await API.LikeCountPost(id)    
    console.log("in action creator retturn likepost",data)
    //dispatch({type:"UPDATE_POST",payload:data})
 }
 catch(err){
     console.log(err)
 }
}
