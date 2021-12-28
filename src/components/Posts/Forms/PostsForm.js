import React, { useState,useEffect } from "react";
import "./PostsForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FileBase from "react-file-base64";
import { useDispatch,useSelector } from "react-redux";
import { createNewPost,updatePostAction,clearPost } from "../../../actionCreators/posts";

import PostAlert from '../../Alerts/PostAlert.js' 

function PostsForm() {
  const dispatch = useDispatch();
  const updatePost = useSelector(store => store.posts.update)
  console.log("in form",updatePost);
  const [showAlert, setAlertState] = useState(false)
  const [alertMsg, setAlertMsg] = useState("")
  const [postData, setpostData] = useState({
    id: "",
    title: "",
    message: "",
    creator: "",
    tags: "",
    selectedFile: "",
  });
  const clear = () => {
    setpostData({ ...postData,
      id: "",
      title: "",
      message:"",
      creator: "",
      tags:"",
      selectedFile:"" })
  };
  const addDAtaToForm = () => {
    setpostData({ ...postData,
      id: updatePost.data[0]._id,
      title: updatePost.data[0].title,
      message: updatePost.data[0].message,
      creator: updatePost.data[0].creator,
      tags: updatePost.data[0].tags,
      selectedFile: updatePost.data[0].selectedFile })

  
  };
 
  const submitHandeler = (e) => {
    console.log(postData);   
    dispatch(createNewPost(postData));       
    clear();    
    setAlertState(true); 
    setAlertMsg("Post created successfully"); 
  };
  const updatePostHandeler = (e) => {
    console.log("in update handeler",postData);   
    dispatch(updatePostAction(postData));   
    setAlertState(true); 
    setAlertMsg("Post Updated successfully");     
     
   
  };
  useEffect(() => {
    if(updatePost.isUpdate)
    {
      addDAtaToForm()
    }
    else
    {
      clear();
    }
    
  }, [updatePost.isUpdate])

  return (
    
    <div className="FormContainer ">
      {showAlert&&<PostAlert msg={alertMsg}  setAlertState={setAlertState}/>}
     
      <div className="text-center py-2">
        <span className="CreateText text-warning">{!updatePost.isUpdate?'Create A New Post':'Update Post'}</span>
      </div>

      <form className="m-2">
        <div className="form-group my-3">
          <label for="exampleInputEmail1" className="text-warning">
            Post Title
          </label>
          <input
            type="text"
            value={postData.title}
            onChange={(e) => {
              setpostData({ ...postData, title: e.target.value });
            }}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Post Title"
          />
        </div>
        <div className="form-group my-3">
          <label for="exampleInputPassword1" className="text-warning">
            Post Message
          </label>
          <input
            type="Text"
            value={postData.message}
            onChange={(e) => {
              setpostData({ ...postData, message: e.target.value });
            }}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Post Message"
          />
        </div>
        <div className="form-group my-3">
          <label for="exampleInputPassword1" className="text-warning">
            Posted By
          </label>
          <input
            type="Text"
            value={postData.creator}
            onChange={(e) => {
              setpostData({ ...postData, creator: e.target.value });
            }}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="form-group my-3">
          <label for="exampleInputPassword1" className="text-warning">
            Post Image
          </label>
{
          updatePost.isUpdate && <img src={postData.selectedFile} style={{height:'100px',margin:'10px'}}/>

}         
      
          <FileBase
            type="file"            
            multipul={false}
            onDone={({ base64 }) => {
              setpostData({ ...postData, selectedFile: base64 });
            }}
          />
        </div>
        <div className="form-group my-3">
          <label for="exampleInputPassword1" className="text-warning">
            Post Tags
          </label>
          <input
            type="Text"
            value={postData.tags}
            onChange={(e) => {
              setpostData({ ...postData, tags: e.target.value });
            }}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
       {
          updatePost.isUpdate?
          <div>
          <button
            type="button"
            onClick={updatePostHandeler}
            className="btn btn-warning my-1 fw-bolder text-dark">Update </button>   
          <button
            type="button"
            onClick={()=>{dispatch(clearPost());clear()}}
            className="btn btn-warning my-1 fw-bolder text-dark mx-2">Cancel</button>
          </div>:
          <div>
          <button
            type="button"
            onClick={submitHandeler}
            className="btn btn-warning my-1 fw-bolder text-dark">Submit </button>
          </div>
       }
          
         
        

        
      </form>
    </div>
  );
}

export default PostsForm;

