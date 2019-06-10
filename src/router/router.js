import React from 'react'
import Entry from '../views/entry.js'
import ConfigStore from '../views/configStore.js'
let routes =[
    {
    path:'/configstore',
    name:'configstore',
    component:ConfigStore,
    children:[{
        name:'test',
        path:'/configstore/test',
        component:()=><h3>123</h3>
    }]
},{
    path:'/home',
    name:'Entry',
    component:Entry
}]
export default routes;