import React, { Component } from 'react'
import MenuItem from '../Menu-item/MenuItem';
import "./directory.scss"

 class Directory extends Component {
     constructor(){
         super();

         this.state = {
             sections:[]
         }
     }
    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({id,title,imgUrl,size}) => 
                   <MenuItem  key={id} title={title} imgUrl={imgUrl}  size={size}/> ) }
            </div>
        )
    }
}

export default Directory
