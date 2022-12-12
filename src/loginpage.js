import {useEffect} from 'react';
import {Card} from 'react-bootstrap';
import loginimg from './Images/hexagon.jpg'
function LoginPage() {
    return (
        <div className='logincontainer'>

            <Card className='cardcontainer' style={{background:'indigo', width:'25rem',height:'25rem',borderRadius:'15px'}} >
    
            <Card.Img variant="top" src={loginimg} style={{width:"110px",alignSelf:"center",marginTop:"25px"}} height="110px"  alt="hexagon"/>
    
            <Card.Body style={{color:'white',alignItems:'center',background:'indigo',margin:'30px'}}>
    
                <Card.Title style={{textAlign:'center',background:'indigo'}}>Portal</Card.Title>
    
                <Card.Text style={{textAlign:'center',background:'indigo'}}>Space for your web3 Team,
                Enterprises and DAOs</Card.Text>
                <div id="signin" className='googlesignin'></div>
            </Card.Body>
            </Card>
        </div>
    );
  }
  
  export default LoginPage;
  