import React from 'react'
import { Link } from 'react-router-dom'

export default function OffCanvasItem(props) {
  return (
    <Link  to={props.destination} style={{color:"white",textDecoration:"none"}}>
    <div className='row border border-light-subtle rounded py-2 mt-2 d-flex align-items-center listItems'>
        <img src={props.logo} style={{width:"16%"}} />
        {props.name}
    </div>
    </Link>
  )
}
