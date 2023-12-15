import React from "react";
const initalState={
    posts:[],
    update:{
    isUpdate:false,
    data:[]
    }
}
 const postReducer=(state=initalState,action)=>{
     switch(action.type){
         case 'FETCH_ALL_POSTS':            
            return {...state,posts:action.payload};   

         case 'CREATE_NEW_POST':
         return {...state,posts:[...state.posts,action.payload]};   

         case 'DELETE_POST':
             let arr=state.posts.filter((item)=>{
                 return item._id!==action.payload.id
             })
             return {...state,posts:arr};   

         case 'GET_UPDATE_POST':
         console.log("))))))))))))))))))))))))))))))))))))))in reducer",action.payload)
         const p=state.posts.filter(item=>{
             return item._id===action.payload
            })        
            return {...state,update:{isUpdate:true,data:p}};     
         case 'UPDATE_POST':
             console.log("itx actionpayload",action.payload);
            const newPostArray=state.posts.map((post)=>(post._id===action.payload.id ?
                     {...post,
                        creator:action.payload.creator,
                        message:action.payload.message,
                        selectedFile:action.payload.selectedFile,
                        tags:action.payload.tags,
                        title:action.payload.title
                    }
                     :post) );
                console.log(newPostArray);
            return {...state,posts:newPostArray,update:{isUpdate:false}};     
         case 'CLEAR_POST':            
            return {...state,update:{isUpdate:false}};     
         case 'LIKE_POST':
             console.log("itx actionpayload",action.payload);
            const likePostArray=state.posts.map((post)=>(post._id===action.payload ?
                     {...post,
                        likeCount:post.likeCount+1,
                    }
                     :post) );
                console.log(likePostArray);
            return {...state,posts:likePostArray,update:{isUpdate:false}};     
         default:
             return state

     }
 }
 export default postReducer;