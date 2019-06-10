import router from './router.js';
import {Router,Route,Switch} from 'dva/router'
import React from 'react';
//render 可以传参    component 不可以穿侧
function setRoutes(routes){
    return routes.map(item=>{
        if(item.children){
            return <Route path={item.path}  render={()=>{
                return <item.component childRoute={item.children}></item.component>
            }}  key={item.name}></Route>
        }
        return <Route path={item.path}  component={item.component}  key={item.name} ></Route>
    })
}

let ROUTER = ({history,app})=>(
    <Router history={history}>
        <Switch>
            {setRoutes(router)}
        </Switch>
    </Router>
);

export {setRoutes};

export default ROUTER;



