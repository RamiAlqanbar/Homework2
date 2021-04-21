import './DesktopNavigation.css'
import undraw from '../../../shared/images/undraw.svg'
import {useHistory} from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'
import {useContext} from 'react'
import { UserContext } from '../../../shared/provider/UserProvider'


export const DesktopNavigation = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const history = useHistory()
    
    const displayAuthUserOrSignin = () => {
        if(authenticatedUser){
            return  <span className='authUser' style={{color:'white'}}>{authenticatedUser}</span>
          
        }
        else
        {
            return <span className='signin' onClick={() => history.push(RoutingPath.signInView)}>Sign In</span>
        }
    }
    return (
        <div className='desktopNavigationWrapper'>
         
            <img className='logo' style={{width:65}} src={undraw} alt={'logo'} onClick={() => history.push(RoutingPath.homeView)}/>
            <span className='shop' onClick={() =>history.push(RoutingPath.shopView)}>Shop</span>
            <span className='gallery' onClick={() => history.push(RoutingPath.galleryView)}>Gallery</span>
            <span className='news'  onClick={() => history.push(RoutingPath.newsView)}>News</span>
            {displayAuthUserOrSignin()}
           
            
        </div>
    )
}
