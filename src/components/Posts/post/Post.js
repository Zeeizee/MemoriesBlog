import React,{useState} from "react";
import { Card, Button } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { useDispatch,useSelector } from "react-redux";
import { deletePost,getUpdatePost,likePost,clearPost} from "../../../actionCreators/posts";
import PostAlert from '../../Alerts/PostAlert' 
import moment from 'moment';




function Post(props) {
  const [showAlert, setAlertState] = useState(false)
  const postid={
    id:""
  };
  
  const dispatch = useDispatch();
  console.log("here================================>", props);
  const isupdateActive = useSelector(store => store.posts.update.isUpdate)
  const delHandeler = (pid) => {
    console.log("del handeler works", pid);
    postid.id=pid
    
    console.log(postid);
    dispatch(deletePost(postid));
    setAlertState(true); 

  };
  const editHandeler = (pid) => {

    dispatch(clearPost());
    dispatch(getUpdatePost(pid));
    console.log("edit handeler works", pid);
  
  }; 
  return (
    <>
    {showAlert&&<PostAlert msg="Post Deleted successfully"  setAlertState={setAlertState}/>}
      <Card key={props.data._id}
        style={{
          width: "18rem",
          margin: "10px 10px",
          height: "400px",
          overflow: "auto",
          boxShadow: "rgba(243, 207, 3, 0.596) 0px 0px 4px ",
          background: "transparent",
        }}
        className=" p-0 text-white"
      >
        <Card.Img
          variant="top"
          src={props.data.selectedFile}
          style={{ width: "100%", height: "170px" }}
        />
        <Card.Text className="text-end small text-warning m-1">
        {moment(props.data.createdAt).fromNow()}
        </Card.Text>
        
        <Card.Body>
          <Card.Title class="text-warning fw-bold h4">{props.data.title}</Card.Title>
          <Card.Text style={{fontSize:"0.7rem"}}>Posted By: {props.data.creator}</Card.Text>
          <Card.Text>Description : {props.data.message}</Card.Text>         
           {
            !isupdateActive?  <Card.Text className="text-end small text-warning m-1" style={{position:"absolute",bottom:'0',right:"0"}}>
              <ModeEditOutlineOutlinedIcon
                onClick={() => {
                  editHandeler(props.data._id)
                }}
              />
              <DeleteIcon
                onClick={() => {
                  delHandeler(props.data._id);
                }}
              />
            </Card.Text>:
            <Card.Text className="text-end small text-muted m-1" style={{position:"absolute",bottom:'0',right:"0"}}>
            <ModeEditOutlineOutlinedIcon
            
            />
            <DeleteIcon
              
            />
          </Card.Text>
            
           }
          <Card.Text className="text-end small text-warning m-1" style={{position:"absolute",bottom:'0',left:"0"}}>
          <ThumbUpAltIcon
            onClick={() => {dispatch(likePost(props.data._id))
              
            }}
          />({props.data.likeCount})
         
        </Card.Text>
         
          
        </Card.Body>
      </Card>
    </>
  );
}

export default Post;
