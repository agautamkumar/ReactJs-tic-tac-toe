import React from 'react' 
import {FaTimes,FaPen,FaRegCircle,} from 'react-icons/fa'

const Icon = ({name}) => {
    switch(name){

    case "cross" :
        return <FaTimes className='icons'/>
     break

    case "circle" :
         return <FaRegCircle className="icons"/>
     break

    default :
        return <FaPen className="icons"/>
    }
}
export default Icon