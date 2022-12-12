
import jwt_decode from 'jwt-decode';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './App.css';

import LoginPage from './loginpage.js'
import {useEffect, useState} from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import UserDeatils from './UserDeatils';
import { UserContext } from './UserContext';

function App() {
  const [user,setUser]=useState({});
  const [logout,setLogout]=useState(false);
  function handleCallbackResponse(response)
  {
      var userobject=jwt_decode(response.credential);
      setUser(userobject);
  }

   useEffect(()=>{
       /* global google */
    google.accounts.id.initialize({
      client_id:"485332934827-sjbcta8db2j121hnb4na92kb745uv0gk.apps.googleusercontent.com",
      callback:handleCallbackResponse
  })
    google.accounts.id.renderButton(
        document.getElementById("signin"),{theme:"filled_black",shape: "circle", text: "continue_with",size:"large",logo_alignment:"left",width: 280}
    );
    
  },[])

  return (
    <div>
      {
          Object.keys(user).length!==0?
            <UserContext.Provider value={user}>
              <Router>
                <Routes>
                  <Route path="/" exact user={user} element={<UserDeatils logout={logout}/>} ></Route>
                </Routes>
              </Router> 
           </UserContext.Provider>
          :
          <LoginPage/>
        
      }
       
    </div>
  );

}

export default App;
