import { Card,Button} from "react-bootstrap"
import {UserContext} from './UserContext';
import {useContext, useState,useEffect} from 'react';
import "./App"
import App from "./App";

function UserDeatils(props)
{
    const user=useContext(UserContext);
    console.log(props.logo)
    const [details,setDetails]=useState("true");
    const [name,setName]=useState(user.name)
    const[logout,setLogout]=useState(props.logout);
    const [image,setImage]=useState("");
    const update=()=>{
        if(name!=="")
        {
            user.name=name;
        }
        setDetails("true")
    }
       
    const updateImg=(e)=>{
        setImage(URL.createObjectURL(e.target.files[0]))
        user.picture=image;
    }
   { 
        return(
                <div className="maincontainer">
                    {
                    details==="true" && logout===false?
                        <div className="userdetailscontainer">
                            <Card style={{width:"40rem",height:"30rem",alignItems:"center",background:"indigo",borderRadius:"20px"}}>
                                
                                <Card.Img src={user.picture} style={{height:"220px",width:"220px",margin:"40px", borderRadius:"160px"}}></Card.Img>
                                <input type="file" accept="image/*" onClick={updateImg} placeholder="Select Image"/>
                                <Card.Body style={{background:"indigo"}}>
                                    <Card.Title style={{textAlign:"center",background:"indigo",color:"white"}}>{user.name}</Card.Title>
                                    <Card.Text style={{textAlign:"center",background:"indigo",color:"white",width:"270px",marginLeft:"90px"}}>{user.email}</Card.Text>
                                    <Button style={{textAlign:"center",background:"blue",color:"white",width:"200px",marginLeft:"10px",height:"40px"}} onClick={()=>{setDetails("false")}}>Update</Button>
                                    <Button style={{textAlign:"center",background:"blue",color:"white",width:"200px",marginLeft:"20px",height:"40px"}} onClick={()=>{setLogout(true)}}>Logout</Button>
                                </Card.Body>
                            </Card>
                        </div>:logout===true?<App/>:
                        <div className="inputcontainer">
                            <input type="text" className="name" placeholder="Name" id="name" onChange={(e)=>{setName(e.target.value)}}/>
                            <button className="btn" onClick={update}>update</button>
                        </div>
                    }
                </div>
                
        )
        

    }
}

export default UserDeatils