import React, { Component } from 'react'
import {setRoutes} from '../router'
export default class ConfigStore extends Component {
    render() {
        console.log(this.props.childRoute)
        return (
            <div>
                this is store config page 
                {setRoutes(this.props.childRoute)}
            </div>
        )
    }
}
