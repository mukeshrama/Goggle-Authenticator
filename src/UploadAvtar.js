import {useState,useContext } from 'react';
import Avatar from 'react-avatar';
import {UserContext} from './UserContext';
function UploadAvtar(){
    return(
        <div>
            <Avatar
                width={400}
                height={300}
                // src={user.picture}
            />
        </div>
    )
}
export default  UploadAvtar()