import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Homepage from'../Page/HomePage';
import Product from'../Page/Product';

export default class ContentA extends React.Component{
    render(){
        return(
            <div>
               <Switch>
                    <Route exact path='/'render={() => <Homepage myCount={3}/>}/>
                    <Route path='/Product' component={Product}/>
                </Switch> 
            </div>
        )
    }
}
