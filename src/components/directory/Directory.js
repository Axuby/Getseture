import React from 'react'
import MenuItem from '../Menu-item/MenuItem';
import { createStructuredSelector } from "reselect";
import "./directory.scss"
import { connect } from 'react-redux';
import selectSections  from '../../Redux/Directory/Directory.selectors';

 const Directory = ({sections}) =>{
        return (
            <div className="directory-menu"> 
        
                {sections.map(({id,...otherSectionValues}) => 
                   <MenuItem  key={id} {...otherSectionValues}/> ) }
            </div>
        )
    }

const mapStateToProps = createStructuredSelector({
    sections:selectSections
})
export default connect(mapStateToProps)(Directory)
