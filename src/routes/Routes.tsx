import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {HomeView} from '../view/navigationtabviews/HomeView'
import {GalleryView} from '../view/navigationtabviews/GalleryView'
import {ShopView} from '../view/navigationtabviews/ShopView'
import {SignInView} from '../view/navigationtabviews/SigninView'
import {NewsView} from '../view/navigationtabviews/NewsView'
import RoutingPath from './RoutingPath'

import React from 'react'

export const Routes = (props: {children?: React.ReactChild}) => {
    return (
        <div>
            <BrowserRouter>
            {props.children}
            <Switch>
                <Route exact path={RoutingPath.homeView} component={HomeView}/>
                <Route exact path={RoutingPath.galleryView} component={GalleryView}/>
                <Route exact path={RoutingPath.shopView} component={ShopView}/>
                <Route exact path={RoutingPath.signInView} component={SignInView}/>
                <Route exact path={RoutingPath.newsView} component={NewsView}/>
                <Route component={HomeView}/>
                

            </Switch>
            </BrowserRouter>
            
        </div>
    )
}
