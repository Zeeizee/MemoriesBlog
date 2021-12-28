import React,{useState} from 'react'
import {Alert} from 'react-bootstrap'

function PostAlert(props) {
    const [showAlert, setshowAlert] = useState(true)
    setTimeout(()=>{
        props.setAlertState(false);
                },5000)
    return (
     
        <div>          
                {console.log()}
               {
                    showAlert && <Alert variant='warning' style={{position:"fixed",top:'10%',left:'50%',transform:'translate(-50%,-50%)',width:"60%"}}>
                    {props.msg}
                    </Alert>
               }
                
           
            
        </div>
    )
}

export default PostAlert
