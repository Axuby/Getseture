import React, { Component } from 'react'
import MenuItem from '../Menu-item/MenuItem';
import "./directory.scss"

 class Directory extends Component {
     constructor(){
         super();

         this.state = {
             sections:[
                 {
                     id:1,
                     title:"Hats",
                     imgUrl:"hhh.png",
                     size:"large",
                     linkUrl:"Hats"
                 },
                 {
                    id:1,
                    title:"Womens",
                    imgUrl:"hhh.png",
                    size:"small",
                    linkUrl:""
                },
             ]
         }
     }
    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({id,...otherSectionValues}) => 
                   <MenuItem  key={id} {...otherSectionValues}/> ) }
            </div>
        )
    }
}  

export default Directory
