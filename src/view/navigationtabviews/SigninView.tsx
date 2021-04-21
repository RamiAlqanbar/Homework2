import { useState, useContext} from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import '../navigationtabviews/SigninView.css'


export const SignInView = () => {
    const history = useHistory()
    const [username, setUsername] = useState<string>('')
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    

    const signin = () =>{
        setAuthenticatedUser(username)
        localStorage.setItem('username', username)
        history.push(RoutingPath.homeView)

    }



    return (
        <div className='sigInBox'>
            <span className="login">Login Now</span>
            <span className='User' style={{fontSize:18}}>Username</span> <input onChange={event => setUsername(event.target.value)}/> <br/><br/>
            <button className='logbutton' onClick={()=> signin()}>Sign in</button>
        </div>
    )
}
